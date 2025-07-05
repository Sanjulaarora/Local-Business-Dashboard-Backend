import headlineTemplates from "../../utils/headlineTemplate.js";

// Function to generate random headline
function generateHeadline(name, location) {
  const template = headlineTemplates[Math.floor(Math.random() * headlineTemplates.length)];
  return template.replace(/{name}/g, name).replace(/{location}/g, location);
}

// Post business data
export const BusinessData = (req, res) => {
  const { name, location } = req.body;

  // validate input fields
  if (!name || !location) {
    return res.status(400).json({ error: "Name and location are required." });
  }

  // generate ratinsg, reviews and headline
  const rating = Math.round((Math.random() * 1.5 + 3.5) * 10) / 10; // Generates in the range: 3.5 - 5.0
  const reviews = Math.floor(Math.random() * 500) + 50; // Generates in the range: 50 - 550
  const headline = generateHeadline(name, location);

  // response
  const response = {
    name,
    location,
    google_rating: rating,
    review_count: reviews,
    seo_headline: headline,
  };

  res.json(response);
};


// Regenerates the headlines
export const RegenerateHeadline = (req, res) => {
  const { name, location } = req.query;

  // checks if input fields are present
  if (!name || !location) {
    return res.status(400).json({ error: "The 'name' and 'location' fields are not present." });
  }

  const fallbackHeadlines = [
    `Premium ${name} Services in ${location} - Trusted by the Community`,
    `Expert ${name} Solutions in ${location} - Quality You Can Count On`,
    `Your Go-To ${name} in ${location} - Excellence Delivered`,
    generateHeadline(name, location),
  ];

  // generates new SEO headline from fallbackHeadlines
  const newHeadline = fallbackHeadlines[Math.floor(Math.random() * fallbackHeadlines.length)];

  res.json({ seo_headline: newHeadline });
};
