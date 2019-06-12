import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the Report Schema.
const ReportSchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    index: true,
    unique: true,
    required: true
  },
  uid: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: true
  },
  placeId: {
    type: String,
    required: true
  },
  lastModifiedDate: {
    type: Date,
    required: true,
    expires: '1h',
    default: Date.now
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
});

const Report = mongoose.model("Report", ReportSchema);

Report.syncIndexes();

export default Report;
