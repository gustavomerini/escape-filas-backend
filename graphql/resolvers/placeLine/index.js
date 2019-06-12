// The Report schema.
import Report from "../../../models/report";
import maps from "../../../google/maps";

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
        Report.findOne(args).exec((err, res) => {
          if (err) reject(err);
          else {
            resolve(getPlaceLine(res));
          }
        })
      })
    },
    placeLinesRadius: async (root, args) => {
      try {
        let places = (await maps.searchPlaces(args)).json.results;
        if (places.length === 0)
          throw new Error("Zero Results")
        let reports = await Report.find({ placeId: { $in: places.map(p => p.place_id) } }).exec();
        let groupedReports = groupBy(reports, report => report.placeId);
        return groupedReports.map(g => getPlaceLine(g.arr));
      } catch (error) {
        throw new Error(error.stack)
      }
    }
  }
};

let getPlaceLine = (res) => {
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
