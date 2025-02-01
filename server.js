import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "dkt2os31l",
  api_key: "235548572591194",
  api_secret: "XqC9z-Lilrkqc-YfhdZdvFbWbVE",
});

export { cloudinary}

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
