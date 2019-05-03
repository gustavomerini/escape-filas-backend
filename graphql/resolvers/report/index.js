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
      try {
        let places = await maps.searchPlaces(lat, lng);
        console.dir(places);
      } catch (error) {
        console.error(error)        
      }
      const newReport = new Report({ lat, lng });
      return new Promise((resolve, reject) => {
        newReport.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};