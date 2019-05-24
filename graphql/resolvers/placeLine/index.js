// The Report schema.
import Report from "../../../models/report";

export default {
  Query: {
    placeLines: () => {
      return new Promise((resolve, reject) => {
        Report.find({}).exec((err, res) => {
          if (err) reject(err);
          else {
            let groupedRes = groupBy(res, report => report.placeId);
            resolve(groupedRes.map(g => getPlaceLine(g.arr)));
          }
        });
      })
    },
    placeLine: (root, args) => {
      return new Promise((resolve, reject) => {
        Report.find(args).exec((err, res) => {
          if (err) reject(err);
          else {
            resolve(getPlaceLine(res));
          }
        })
      })
    }
  }
};

let getPlaceLine = (res) => {
  console.log(res);
  if (res.length === 0) return res;
  else {
    return res.reduce((placeLine, report) => {
      placeLine.quantity += report.quantity;
      return placeLine;
    }, { placeName: res[0].name, placeId: res[0].placeId, quantity: 0 });
  }
}

let groupBy = (list) => {
  let groups = [];
  list.forEach(report => {
    let group = groups.find(g => g.placeId === report.placeId)
    if (!group) {
      groups.push({ placeId: report.placeId, arr: [report] });
    } else {
      group.arr.push(report)
    }
  })
  return groups;
}
