// The Report schema.
// Nesse arquivo, definimos os metodos que a nossa estrutura Report terá, aqui podemos dar um getReport, deleteReport, list, add
// um CRUDL completo.
import Report from "../../../models/Report";

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
    addReport: (root, { id, name, placeId }) => {
      const newReport = new Report({ id, name, placeId });

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
    }
  }
};