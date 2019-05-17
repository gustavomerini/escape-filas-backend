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
    unique: true,
    required: true
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
    expires: '5m',
    default: Date.now
  }
});

const Report = mongoose.model("Report", ReportSchema);

export default Report;
