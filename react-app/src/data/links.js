// Allen County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-19

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The vendor that hosts the county Auditor's online parcel/property records.
export const AUDITOR_VENDOR = "Beacon (Schneider Geospatial)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Allen County (Official Site)", category: "Government", subcategory: "County", url: "https://allencountyohio.com/", description: "Official government portal for Allen County, Ohio (county seat: Lima)." },
  { name: "Allen County Auditor", category: "Government", subcategory: "Auditor", url: "https://allencountyohauditor.com/", description: "Property records, valuations, and parcel/property search (hosted on Beacon / Schneider Geospatial)." },
  { name: "Allen County Board of Elections", category: "Government", subcategory: "Elections", url: "https://allen.boe.ohio.gov/", description: "Voter registration, polling locations, and election administration." },
  { name: "City of Lima", category: "Government", subcategory: "City", url: "https://www.cityoflima.org/", description: "Government site for the City of Lima, the county seat." },
  // ---------- Education ----------
  { name: "Lima Public Library", category: "Education", subcategory: "Library", url: "https://www.limalibrary.com/", description: "Public library serving Lima and Allen County." },
  { name: "Lima City Schools", category: "Education", subcategory: "K-12", url: "https://www.limacityschools.org/", description: "Allen County's largest public school district, serving Lima." },
  { name: "Ohio State University at Lima", category: "Education", subcategory: "Higher Ed", url: "https://lima.osu.edu/", description: "Regional campus of Ohio State University in Lima." },
  { name: "University of Northwestern Ohio", category: "Education", subcategory: "Higher Ed", url: "https://www.unoh.edu/", description: "Private university in Lima serving Allen County and the region." },
  { name: "Rhodes State College", category: "Education", subcategory: "Higher Ed", url: "https://www.rhodesstate.edu/", description: "Public community/technical college in Lima." },
  // ---------- Health ----------
  { name: "Allen County Public Health", category: "Health", subcategory: "Public Health", url: "https://www.allencountypublichealth.org/", description: "County public-health agency: clinics, inspections, vital records, and programs." },
  { name: "Mercy Health – St. Rita's Medical Center", category: "Health", subcategory: "Hospital", url: "https://www.mercy.com/locations/hospitals/lima/mercy-health-st-ritas-medical-center", description: "Full-service medical center in Lima serving Allen County and the region." },
  // ---------- Business & Economy ----------
  { name: "Lima/Allen County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://limachamber.com/", description: "Business advocacy, member support, and community resources across Allen County." },
  { name: "Greater Lima Region", category: "Business & Economy", subcategory: "Economic Development", url: "https://greaterlimaregion.com/", description: "Regional economic-development organization supporting business growth in Allen County." },
  // ---------- Community & Social ----------
  { name: "OhioMeansJobs Allen County", category: "Community & Social", subcategory: "Assistance", url: "https://ohiomeansjobs.ohio.gov/job-seekers/find-a-job/local-help/allen-county", description: "Workforce, job-search, and employment services for county residents." },
  { name: "United Way of Greater Lima", category: "Community & Social", subcategory: "Assistance", url: "https://www.uwglima.org/", description: "Local United Way funding health, education, and financial-stability programs." },
  // ---------- Recreation & Tourism ----------
  { name: "Visit Greater Lima", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://www.visitgreaterlima.com/", description: "Official visitor guide (Lima/Allen County CVB): attractions, events, and dining." },
  { name: "Johnny Appleseed Metropolitan Park District", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.jamppd.com/", description: "Allen County metropolitan park district with nature preserves, trails, and programs." },
  // ---------- News & Media ----------
  { name: "The Lima News", category: "News & Media", subcategory: "Newspaper", url: "https://www.limaohio.com/", description: "Lima-based daily newspaper covering Allen County." },
  { name: "Hometown Stations (WLIO/WOHL)", category: "News & Media", subcategory: "Broadcast", url: "https://www.hometownstations.com/", description: "Lima broadcast news serving Allen County." },
];
