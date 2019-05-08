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
    addReport: (root, { name, placeId }) => {
      const newReport = new Report({ name, placeId });
      return new Promise((resolve, reject) => {
        newReport.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editReport: (root, { id, name, placeId }) => {
      return new Promise((resolve, reject) => {
        Report.findOneAndUpdate({ id }, { $set: { name, placeId } }).exec(
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
    addReportLocation: async (root, { lat, lng }) => {
      return new Promise(async (resolve, reject) => {
        try {
          let places = (await maps.searchPlaces(lat, lng)).json.results;
          if (places.length === 0) {
            reject("Zero Results")
          }
          let place = places[0];
          console.log(place);
          const newReport = new Report({ name: place.name, placeId: place.place_id });
          newReport.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        } catch (error) {
          reject(error);
        }
      });
    }
  }
};