// The Report schema.
import Report from "../../../models/report";
import maps from "../../../google/maps";

export default {
  Query: {
    report: (root, args) => {
      return new Promise((resolve, reject) => {
        Report.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    reports: () => {
      return new Promise((resolve, reject) => {
        Report.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addReport: (root, { name, placeId, quantity }) => {
      const newReport = new Report({ name, placeId, quantity });
      return new Promise((resolve, reject) => {
        newReport.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editReport: (root, { id, name, placeId, uid, quantity }) => {
      return new Promise((resolve, reject) => {
        Report.findOneAndUpdate({ id }, { $set: { name, placeId, uid, quantity } }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteReport: (root, args) => {
      return new Promise((resolve, reject) => {
        Report.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    addReportLocation: async (root, { uid, lat, lng }) => {
      return new Promise(async (resolve, reject) => {
        try {
          let places = (await maps.searchPlaces({lat, lng})).json.results;
          if (places.length === 0) 
            return reject("Zero Results")
          let place = places[0];
          const newReport = new Report({ uid, name: place.name, placeId: place.place_id });
          Report.findOneAndDelete({ uid }, (err, res) => {
            if (err) reject(err);
            else {
              newReport.save((err_, res_) => {
                err_ ? reject(err_) : resolve(res_);
              });
            }
          });
        } catch (error) {
          reject(error);
        }
      });
    },
    deleteAll: async (root, args) => {
      return new Promise(async (resolve, reject) => {
        try {
          Report.remove(args, (err, res) => {
            err ? reject(err) : resolve(res);
          })
        } catch (error) {
          reject(error);
        }
      })
    }
  }
};