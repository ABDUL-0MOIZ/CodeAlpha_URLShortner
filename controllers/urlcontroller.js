const Url = require("../models/URL");
const { nanoid } = require("nanoid");

const homecontroller = (req, res) => {
  const msg = req.query.msg || "";
  const shortenedUrl = req.query.shortenedUrl || "";
  res.render("index", {
    title: "URL Shortener",
    msg: msg,
    shortenedUrl: shortenedUrl,
  });
};
const shortnerurl = async (req, res) => {
  const originalUrl = req.body.url;
  const existingUrl = await Url.findOne({ originalUrl: originalUrl });

  if (existingUrl) {
    return res.redirect(
      `/?msg=URL+already+shortened!&shortenedUrl=${existingUrl.shortUrl}`,
    );
  } else {
    const shortUrl = nanoid(4);
    const newUrl = new Url({
      originalUrl: originalUrl,
      shortUrl: shortUrl,
    });
    newUrl
      .save()
      .then(() => {
        console.log("URL saved successfully");

        res.redirect(
          `/?msg=URL+Shortened+Successfully!&shortenedUrl=${shortUrl}`,
        );
      })
      .catch((err) => {
        console.error("Error saving URL:", err);
        res.redirect(`/?msg=Error+Saving+URL&shortenedUrl=${shortUrl}`);
      });
  }
};
goalurl = async (req, res) => {
  const shortUrl = req.params.shortUrl;
  try {
    const url = await Url.findOne({ shortUrl: shortUrl });
    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).send("URL not found");
    }
  } catch (err) {
    console.error("Error retrieving URL:", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { shortnerurl, homecontroller, goalurl };
