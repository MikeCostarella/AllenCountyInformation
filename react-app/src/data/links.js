// Allen County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-11-08
//
// Every URL below was fetched and its content checked against the organization
// it claims to be. Nothing here was guessed from a naming pattern.
//
// THE HAZARD HERE IS ALLEN COUNTY, INDIANA
//
// Fort Wayne's Allen County has ten times the web presence and outranks Ohio in
// nearly every search. acpl.info is Fort Wayne's library, allencounty.us and
// allencountysheriff.org are Indiana's. Kansas and Kentucky have Allen Counties
// too. "Lima" also brings up Peru and Lima, New York. Also hit:
//
//   perrylocal.org   -> Perry Local Schools, STARK County (Perry here is mycommodores.org)
//   perry-lake.org   -> Perry Local Schools, LAKE County
//
// THE JULY FILE HAD FOUR DEAD OR WRONG LINKS — all fixed here:
//
//   * cityoflima.org is gone; the city is at limaohio.gov.
//   * uwglima.org no longer resolves; United Way of Greater Lima is at
//     unitedwaylima.org.
//   * jamppd.com (extra "p") never was the park district; it is jampd.com.
//   * The state ohiomeansjobs.ohio.gov county page is superseded by the local
//     site ohiomeansjobs-allen-county.com (omjallen.com redirects there).
//
// DOMAINS THAT MOVED SINCE JULY (the county portal still lists some old ones):
// allencsb.com -> allencountyohiocsb.gov; allencountyohiochildsupport.com ->
// .gov; shawneetownship.com -> shawneetownshipohio.gov; allenohiojuvenile.com ->
// allenohioprobate.com (Probate and Juvenile share one judge, building and site);
// hsoac.org -> ohiospca.org; frcohio.org -> frcohio.com; limamunicipalcourt.org
// blocks fetching, so the court's section on limaohio.gov is used.
//
// THINGS THAT ARE OUT OF DATE EVERYWHERE ELSE:
//
//   * The Mental Health & Recovery Services Board of Allen, Auglaize and Hardin
//     now operates as "We Care People" (wecarepeople.org) at 528 W. Market St.;
//     directories still give 529 S. Elizabeth St.
//   * St. Rita's Hospice became Mercy Health Hospice by Compassus in 2024; the
//     mercy.com URL still says st-ritas-hospice.
//   * The Humane Society of Allen County's shelter has been run by the Ohio SPCA
//     since 2015.
//   * The community foundation is the Lima Community Foundation (1965), not
//     "Community Foundation of Lima & Allen County".
//   * WTLW's full-power signal became WLMA in October 2022 but still brands as
//     WTLW TV44; its only web presence is on actsministries.com.
//   * Hometown Stations (WLIO/WOHL) is owned by Gray Media, not Block.
//   * The Lima Locos' old pointstreak site is dead; the live one is limalocos.net.
//   * The Village of Lafayette's lafayetteoh.com is an unfinished vendor template
//     full of lorem ipsum — not listed.
//
// GEOGRAPHY WORTH KNOWING:
//
//   * Delphos straddles Allen/Van Wert (Franklin Elementary is in Allen; Jefferson
//     Middle/High are in Van Wert). Bluffton and Bluffton University straddle
//     Allen/Hancock. Both are included and flagged.
//   * Spencerville Public Library is a branch of Lima Public Library (as are
//     Cairo, Elida and Lafayette); only Bluffton and Delphos are independent.
//   * Nine public districts plus Apollo. Lima Municipal Court's jurisdiction is
//     the whole county. The Third District Court of Appeals sits in Lima.
//   * 9-1-1 has no agency of its own: answering points at the Sheriff and Lima
//     Police, administered through the EMA.
//   * Allen County is its own TV market (WLIO/WOHL). Stations that serve Lima
//     but are licensed elsewhere are left out: WBKS (Columbus Grove), WMLX
//     (St. Marys), WFGF (Wapakoneta), WGLE (WGTE repeater with no Lima site).
//   * The Farm Bureau office is in Ottawa (Putnam); WOCAP's Head Start, Coleman
//     and Health Partners are regional bodies with Lima sites — all flagged.
//
// LEFT OUT rather than listed unverified: Cairo and Harrod (no sites; Harrod is
// Facebook only); Lafayette (template site, see above); townships Amanda,
// Auglaize, Jackson, Marion, Monroe, Richland, Spencer and Sugar Creek (no
// sites); the Treasurer's separate tax portal and Clerk docket site (block
// fetching); Samaritan House Lima (blocks fetching); Spencerville Chamber and
// Spencerville Journal-News (no websites found); The Bluffton News (no website
// found); Encore Theatre (no first-party site found); Lima-area Catholic
// elementary schools (parish sites only); low-power religious FMs WCBV-LP and
// WNHC-LP (not pursued).

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Allen County Auditor Real Estate Property Search (Beacon)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Allen County, Ohio", category: "Government", subcategory: "County", url: "https://www.allencountyohio.com/", description: "County portal maintained by the Commissioners, linking to elected offices, courts, departments, boards, townships and villages." },
  { name: "Allen County Board of Commissioners", category: "Government", subcategory: "County", url: "https://commissioners.allencountyohio.com/", description: "Three-member board with offices at 204 N. Main Street, Suite 301 in Lima." },
  { name: "Allen County Job & Family Services", category: "Government", subcategory: "County", url: "https://acjfs.org/", description: "County public assistance and workforce agency at 951 Commerce Parkway in Lima." },
  { name: "Allen County Children Services", category: "Government", subcategory: "County", url: "https://allencountyohiocsb.gov/", description: "County children services board — child protective services and foster care — at 123 W. Spring St. in Lima." },
  { name: "Allen County Child Support Enforcement Agency", category: "Government", subcategory: "County", url: "https://allencountyohiochildsupport.gov/", description: "County CSEA at 200 W. Market Street in Lima." },
  { name: "Allen County Family & Children First Council", category: "Government", subcategory: "County", url: "https://allencountyohio.com/family-children-first/", description: "County service-coordination council for families, meeting at 951 Commerce Parkway in Lima." },
  { name: "Allen County Board of Developmental Disabilities", category: "Government", subcategory: "County", url: "https://www.acbdd.org/", description: "County board serving residents with developmental disabilities, at 2500 Ada Road in Lima." },
  { name: "Allen County Auditor", category: "Government", subcategory: "Auditor", url: "https://www.allencountyohauditor.com/", description: "Office of Auditor Rachael S. Gilroy at 237 N. Main Street in Lima, with real estate and mobile home property search, sales data and GIS maps." },
  { name: "Allen County Auditor Real Estate Property Search", category: "Government", subcategory: "GIS", url: "https://beacon.schneidercorp.com/Application.aspx?App=AllenCountyOH&PageType=Search", description: "The Auditor's parcel search, sales search and map on Beacon (Schneider Geospatial) — the service this project's parcel data is built from." },
  { name: "Allen County Treasurer", category: "Government", subcategory: "Treasurer", url: "https://allencountyohtreasurer.com/", description: "County treasurer's office for property tax collection at 237 N. Main St., Suite 123 in Lima." },
  { name: "Allen County Recorder", category: "Government", subcategory: "Recorder", url: "https://allencountyohio.com/recorder/", description: "Office of Recorder Mona S. Losh, recording deeds, mortgages and other land documents, at 237 N. Main St., Suite 132 in Lima." },
  { name: "Allen County Recorder — Public Records Search", category: "Government", subcategory: "Recorder", url: "https://recorderexternal.allencountyohio.com/paxworld", description: "The Recorder's online document search (PAX World)." },
  { name: "Allen County Board of Elections", category: "Government", subcategory: "Elections", url: "https://allen.boe.ohio.gov/", description: "County elections office on the first floor of the Third District Court of Appeals building, 204 N. Main St. in Lima." },
  { name: "Allen County Clerk of Courts", category: "Government", subcategory: "Courts", url: "https://clerkofcourts.allencountyohio.com/", description: "Office of Clerk Jennifer McBride, serving the Common Pleas Court and the title division, at 301 N. Main St. in Lima." },
  { name: "Allen County Common Pleas Court — General Division", category: "Government", subcategory: "Courts", url: "https://allencountyohio.com/court-system/common-pleas/", description: "Civil and felony criminal court before Judges Terri L. Kohlrieser and Jeffrey L. Reed, at the courthouse, 301 N. Main St. in Lima." },
  { name: "Allen County Common Pleas Court — Domestic Relations Division", category: "Government", subcategory: "Courts", url: "https://allencountyohio.com/court-system/domestic-relations/", description: "Divorce, dissolution, custody and support cases before Judge Matt C. Staley." },
  { name: "Allen County Probate and Juvenile Courts", category: "Government", subcategory: "Courts", url: "https://allenohioprobate.com/", description: "Shared site of the Probate and Juvenile divisions under Judge Todd E. Kohlrieser, at 1000 Wardhill Ave. in Lima." },
  { name: "Lima Municipal Court", category: "Government", subcategory: "Courts", url: "https://www.limaohio.gov/100/Municipal-Court", description: "Court for traffic, misdemeanor and civil cases from all of Allen County, with Judges John R. Payne and Tammie K. Hursh, at 109 N. Union St. in Lima." },
  { name: "Ohio Third District Court of Appeals", category: "Government", subcategory: "Courts", url: "https://www.third.courts.state.oh.us/", description: "State appellate court for 17 northwest Ohio counties, seated at 204 N. Main St. in Lima." },
  { name: "Allen County Prosecutor", category: "Government", subcategory: "Courts", url: "https://allencountyprosecutor.net/", description: "Office of Prosecuting Attorney Destiny R. Caldwell at 204 North Main Street in Lima." },
  { name: "Allen County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://acso-oh.us/", description: "Office of Sheriff Matthew B. Treglia at 333 N. Main St. in Lima; it also runs one of the county's two 9-1-1 answering points." },
  { name: "Allen County Coroner", category: "Government", subcategory: "Public Safety", url: "https://allencountyohio.com/coroner/", description: "Office of Coroner Dr. John T. Meyer at 204 North Main Street, Suite 102 in Lima." },
  { name: "Allen County Homeland Security & Emergency Management", category: "Government", subcategory: "Public Safety", url: "https://allen-ema.com/", description: "County EMA at 2000 North West Street in Lima, which also administers the county 9-1-1 system (answering points at the Sheriff's Office and Lima Police)." },
  { name: "Allen County Dog Control", category: "Government", subcategory: "Public Safety", url: "https://allencountyohio.com/dog-control/", description: "County dog warden, operating the Dog Control Facility at 1165 Seriff Road in Lima." },
  { name: "Allen County Engineer", category: "Government", subcategory: "Public Works", url: "https://allencountyohengineer.com/", description: "Office of Engineer Brion E. Rhodes at 1501 North Sugar Street in Lima, responsible for county roads and bridges." },
  { name: "Allen County Sanitary Engineering", category: "Government", subcategory: "Public Works", url: "https://allencountyohio.com/sanitary-engineering/", description: "County sewer and water utility department, with its main office at 3230 N. Cole St. in Lima." },
  { name: "Allen Water District", category: "Government", subcategory: "Public Works", url: "https://allenwaterdistrict.com/", description: "Regional water district (a political subdivision under ORC 6119) with offices at 3230 N. Cole St. in Lima." },
  { name: "Allen County Regional Airport", category: "Government", subcategory: "Transit", url: "https://www.allencountyairport.com/", description: "County airport (AOH) run by the Allen County Regional Airport Authority at 700 Airport Dr. in Lima." },
  { name: "Allen County Regional Transit Authority", category: "Government", subcategory: "Transit", url: "https://acrta.com/", description: "Public transit for Lima and Allen County, at 200 E. High St., Suite 1C in Lima." },
  { name: "Lima-Allen County Regional Planning Commission", category: "Government", subcategory: "Planning", url: "https://www.lacrpc.com/", description: "Regional planning agency and metropolitan planning organization at 130 W. North St. in Lima." },
  { name: "Allen Soil and Water Conservation District", category: "Government", subcategory: "Conservation", url: "https://www.allenswcd.com/", description: "The county's soil and water conservation district at 1870 Slabtown Road in Lima." },
  { name: "Allen County Veterans Service Commission", category: "Government", subcategory: "Veterans", url: "https://www.allencountyvsc.com/", description: "County veterans service office in the Government Center, 237 N. Main Street in Lima." },
  { name: "City of Lima", category: "Government", subcategory: "City", url: "https://www.limaohio.gov/", description: "The county seat; Mayor Sharetta Smith and city offices at the Lima Municipal Center, 50 Town Square." },
  { name: "City of Delphos", category: "Government", subcategory: "City", url: "https://www.cityofdelphos.com/", description: "City offices at 608 North Canal Street in Delphos, a city that straddles the Allen–Van Wert county line." },
  { name: "Village of Beaverdam", category: "Government", subcategory: "Village", url: "https://www.beaverdamoh.com/", description: "Village offices at 101 West Main St. in Beaverdam." },
  { name: "Village of Bluffton", category: "Government", subcategory: "Village", url: "https://www.bluffton-ohio.com/", description: "Village offices at 154 North Main Street in Bluffton, a village that straddles the Allen–Hancock county line." },
  { name: "Village of Elida", category: "Government", subcategory: "Village", url: "https://voelida.com/", description: "Village offices at Elida Town Hall, 406 E. Main St." },
  { name: "Village of Spencerville", category: "Government", subcategory: "Village", url: "https://spencervilleoh.com/", description: "Village offices at 116 S. Broadway St. in Spencerville." },
  { name: "Allen County Cities & Villages", category: "Government", subcategory: "Village", url: "https://allencountyohio.com/cities-villages/", description: "County directory of Lima, Delphos and the seven villages — including Cairo, Harrod and Lafayette, which have no working websites of their own." },
  { name: "American Township", category: "Government", subcategory: "Township", url: "https://www.amertwp.us/home", description: "Township office at 102 Pioneer Road in Elida." },
  { name: "Bath Township", category: "Government", subcategory: "Township", url: "https://bathtwp.com/", description: "Township office at 2880 Ada Road in Lima." },
  { name: "Perry Township", category: "Government", subcategory: "Township", url: "https://perryallenohio.com/", description: "Township office at 2408 E. Breese Road in Lima." },
  { name: "Shawnee Township", category: "Government", subcategory: "Township", url: "https://www.shawneetownshipohio.gov/", description: "Township office at 2530 Ft. Amanda Road in Lima." },
  { name: "Allen County Townships", category: "Government", subcategory: "Township", url: "https://allencountyohio.com/townships/", description: "County directory of all 12 townships with addresses and phone numbers — Amanda, Auglaize, Jackson, Marion, Monroe, Richland, Spencer and Sugar Creek have no websites of their own." },
  // ---------- Education ----------
  { name: "Lima City Schools", category: "Education", subcategory: "K-12", url: "https://www.limacityschools.org", description: "Public district headquartered at 755 St. Johns Avenue in Lima, with ten schools including Lima Senior High, West and North middle schools and four elementaries." },
  { name: "Shawnee Local Schools", category: "Education", subcategory: "K-12", url: "https://www.limashawnee.com", description: "Public district at 3255 Zurmehly Road in Shawnee Township, south of Lima — high school, middle school, Maplewood Intermediate and Elmwood Primary." },
  { name: "Elida Local Schools", category: "Education", subcategory: "K-12", url: "http://www.home.elida.k12.oh.us", description: "Public district at 4380 Sunnydale Avenue in Elida, with an elementary, middle and high school." },
  { name: "Bath Local Schools", category: "Education", subcategory: "K-12", url: "https://www.bathwildcats.org", description: "Public district at 2650 Bible Road in Bath Township, north of Lima, with an elementary, middle and high school." },
  { name: "Perry Local Schools", category: "Education", subcategory: "K-12", url: "https://www.mycommodores.org", description: "Public district at 2770 E. Breese Road in Perry Township, southeast of Lima." },
  { name: "Allen East Local Schools", category: "Education", subcategory: "K-12", url: "https://www.alleneastschools.org", description: "Public district at 9105 Harding Highway in Harrod, serving the eastern part of the county including Harrod and Lafayette." },
  { name: "Bluffton Exempted Village Schools", category: "Education", subcategory: "K-12", url: "https://www.blufftonschools.org", description: "Public district at 102 S. Jackson Street in Bluffton, serving a village that straddles the Allen–Hancock line." },
  { name: "Delphos City Schools", category: "Education", subcategory: "K-12", url: "https://www.delphoscityschools.org", description: "Public district at 901 Wildcat Lane in Delphos — Franklin Elementary is in Allen County, Jefferson Middle and High School in Van Wert County." },
  { name: "Spencerville Local Schools", category: "Education", subcategory: "K-12", url: "https://www.spencervillebearcats.com", description: "Public district at 2500 Wisher Drive in Spencerville, with an elementary, middle and high school." },
  { name: "Apollo Career Center", category: "Education", subcategory: "Career Center", url: "https://www.apollocareercenter.com", description: "Joint vocational school district at 3325 Shawnee Road in Lima, with high school career-technical programs and adult education." },
  { name: "Allen County Educational Service Center", category: "Education", subcategory: "ESC", url: "https://www.allencountyesc.org", description: "ESC at 1920 Slabtown Road in Lima, providing special education, preschool and support services to the county's nine districts and Apollo." },
  { name: "The Ohio State University at Lima", category: "Education", subcategory: "University", url: "https://lima.osu.edu", description: "Ohio State's regional campus at 4240 Campus Drive in Lima, offering bachelor's degrees and the first two years of most majors." },
  { name: "Rhodes State College", category: "Education", subcategory: "University", url: "https://www.rhodesstate.edu", description: "Public two-year technical and community college at 4240 Campus Drive in Lima, sharing a campus with Ohio State Lima." },
  { name: "University of Northwestern Ohio", category: "Education", subcategory: "University", url: "https://www.unoh.edu", description: "Private university at 1441 N. Cable Road in Lima, known for its College of Applied Technologies." },
  { name: "Bluffton University", category: "Education", subcategory: "University", url: "https://www.bluffton.edu", description: "Private Christian liberal arts university at 1 University Drive in Bluffton." },
  { name: "Lima Central Catholic High School", category: "Education", subcategory: "Private School", url: "https://www.lcchs.edu", description: "Catholic high school at 720 South Cable Road in Lima." },
  { name: "Temple Christian School", category: "Education", subcategory: "Private School", url: "https://www.tcspioneers.org", description: "Private K-12 Christian school at 750 Brower Road in Lima." },
  { name: "Delphos St. John's School", category: "Education", subcategory: "Private School", url: "https://www.delphosstjohns.org", description: "Parish-run Catholic school in Delphos serving preschool through 12th grade." },
  { name: "Lima Christian Academy", category: "Education", subcategory: "Private School", url: "https://cbclima.org/lima-christian-academy/", description: "Preschool-through-12 Christian school at 3180 West Elm Street in Lima, sponsored by Calvary Bible Church and hosted on the church's site." },
  { name: "Lima Public Library", category: "Education", subcategory: "Library", url: "https://www.limalibrary.com", description: "Main library at 650 West Market Street in Lima, with branches in Cairo, Elida, Lafayette and Spencerville." },
  { name: "Bluffton Public Library", category: "Education", subcategory: "Library", url: "https://blufftonpubliclibrary.org/", description: "Independent public library at 145 S. Main Street in Bluffton." },
  { name: "Delphos Public Library", category: "Education", subcategory: "Library", url: "https://www.delphoslibrary.org/", description: "Independent public library at 309 West Second Street in Delphos." },
  { name: "West Ohio Community Action Partnership — Head Start", category: "Education", subcategory: "Preschool", url: "https://wocap.org/", description: "Head Start and Early Head Start preschool for Allen, Auglaize and Mercer counties, run from 540 S. Central Avenue in Lima." },
  // ---------- Health ----------
  { name: "Mercy Health – St. Rita's Medical Center", category: "Health", subcategory: "Hospital", url: "https://www.mercy.com/lima/locations/hospital/st-ritas-medical-center", description: "Regional hospital at 730 W. Market Street in Lima, serving a ten-county area of west central Ohio." },
  { name: "Lima Memorial Health System", category: "Health", subcategory: "Hospital", url: "https://www.limamemorial.org", description: "ProMedica-affiliated not-for-profit hospital system on Bellefontaine Avenue in Lima, with a Level II trauma center and a ten-county service area." },
  { name: "Allen County Public Health", category: "Health", subcategory: "Public Health", url: "https://www.allencountypublichealth.org", description: "The county health district at 219 E. Market Street in Lima — immunizations, clinics, WIC, environmental health, vital records and emergency preparedness." },
  { name: "Health Partners of Western Ohio — Lima", category: "Health", subcategory: "Clinic", url: "https://www.hpwohio.org/locations/lima/all", description: "Federally qualified health center with the Dr. Gene Wright Community Health Center at 441 E. 8th Street, North Lima Community Health Center at 2001 N. Cole Street, and school-based centers at Lima Senior and Perry high schools." },
  { name: "We Care People — Mental Health & Recovery Services Board", category: "Health", subcategory: "Mental Health", url: "https://www.wecarepeople.org/", description: "The Mental Health and Recovery Services Board of Allen, Auglaize and Hardin Counties, at 528 W. Market Street in Lima, which plans and funds behavioral health services and runs the 24-hour We Care crisis line, 1-800-567-HOPE." },
  { name: "Coleman Health Services — Allen County", category: "Health", subcategory: "Mental Health", url: "https://www.colemanservices.org/counties/allen/", description: "Mental health, addiction, crisis, housing and employment services from the Lima campus at 799 S. Main Street, with a crisis stabilization unit next door." },
  { name: "Family Resource Center of Northwest Ohio", category: "Health", subcategory: "Mental Health", url: "https://www.frcohio.com", description: "Behavioral health services for youth and adults from its Lima campus at 530 S. Main Street." },
  { name: "Mercy Health Hospice by Compassus — Lima", category: "Health", subcategory: "Hospice", url: "https://www.mercy.com/locations/specialty-locations/hospice-care-palliative-care/mercy-health-st-ritas-hospice", description: "Hospice care at 545 W. Market Street, Suite 200 in Lima — the former St. Rita's Hospice, operated by Compassus under the Mercy Health name since 2024." },
  { name: "Bridge Hospice at Lima Memorial", category: "Health", subcategory: "Hospice", url: "https://www.limamemorial.org/medical-services/hospice-care/", description: "Inpatient hospice care at Lima Memorial, in partnership with Bridge Hospice." },
  // ---------- Business & Economy ----------
  { name: "Lima/Allen County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://limachamber.com/", description: "The county chamber, representing member businesses across Allen County from downtown Lima." },
  { name: "Delphos Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.delphoschamber.com/", description: "Chamber at 310 N. Main St. in Delphos." },
  { name: "Bluffton Area Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.blufftonareachamber.com/", description: "Chamber at 154 N. Main St., 2nd floor in Bluffton." },
  { name: "Allen Economic Development Group", category: "Business & Economy", subcategory: "Economic Development", url: "https://aedg.org/", description: "Recruits and expands business in Lima and Allen County from 144 S. Main St., Suite 200 in Lima, and administers the Port Authority of Allen County." },
  { name: "Greater Lima Region", category: "Business & Economy", subcategory: "Economic Development", url: "https://greaterlimaregion.com/", description: "Eight-county regional economic partnership headquartered at 144 S. Main St., Suite 200 in Lima." },
  { name: "Downtown Lima, Inc.", category: "Business & Economy", subcategory: "Downtown", url: "https://www.visitdowntownlima.com/", description: "Promotes and programs the downtown business district — Third Thursdays, Lantern Tours — from 144 S. Main St. in Lima." },
  { name: "OhioMeansJobs Allen County", category: "Business & Economy", subcategory: "Workforce", url: "https://ohiomeansjobs-allen-county.com/", description: "The county's workforce center in Lima, matching employers with job seekers and funding training; the former omjallen.com redirects here." },
  { name: "OSU Extension — Allen County", category: "Business & Economy", subcategory: "Agriculture", url: "https://allen.osu.edu/", description: "Ohio State University Extension at 2750 Harding Highway, on the fairgrounds in Lima — agriculture, 4-H and family programs." },
  { name: "Allen County Farm Bureau", category: "Business & Economy", subcategory: "Agriculture", url: "https://ofbf.org/counties/allen", description: "The county Farm Bureau's page on the Ohio Farm Bureau Federation site; its office is a shared regional one in Ottawa (Putnam County)." },
  // ---------- Community & Social ----------
  { name: "United Way of Greater Lima", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.unitedwaylima.org/", description: "Funds and coordinates health and human-service programs across Allen County from 616 S. Collett St. in Lima, and runs Greater Lima 2-1-1." },
  { name: "Lima Community Foundation", category: "Community & Social", subcategory: "Nonprofit", url: "http://www.limacommunityfoundation.org/", description: "Community foundation founded in 1965, at 207 W. Elm St. in Lima, managing donor funds and making grants and scholarships in the Lima area." },
  { name: "Lima-Allen County Neighborhoods in Partnership", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.lacnip.org/", description: "Supports neighborhood associations, community gardens and Good Neighbor programs from 1440 W. Spring St. in Lima." },
  { name: "Bradfield Community Center", category: "Community & Social", subcategory: "Nonprofit", url: "http://www.bradfieldlima.org/", description: "Community center serving Lima since 1938 at 550 S. Collett St. — after-school care, GED preparation, senior wellness and recreation." },
  { name: "Crossroads Crisis Center", category: "Community & Social", subcategory: "Nonprofit", url: "https://crossroadscrisiscenter.com/", description: "Emergency shelter, advocacy and a 24-hour hotline for survivors of domestic and sexual violence and trafficking in the Lima area." },
  { name: "West Ohio Food Bank", category: "Community & Social", subcategory: "Food & Assistance", url: "https://wofb.org/", description: "Regional food bank at 1380 E. Kibby St. in Lima, supplying pantries and programs in Allen and ten other west-central Ohio counties." },
  { name: "The Salvation Army — Lima Citadel Corps", category: "Community & Social", subcategory: "Food & Assistance", url: "https://www.salvationarmyusa.org/oh/lima/e-market-st-corps/", description: "Emergency assistance, seasonal programs and worship at 614 E. Market St. in Lima." },
  { name: "Lima Rescue Mission", category: "Community & Social", subcategory: "Housing", url: "https://limamission.org/", description: "Shelter, meals and recovery programs for homeless men at 216 E. Wayne St. in Lima." },
  { name: "Habitat for Humanity Lima Area", category: "Community & Social", subcategory: "Housing", url: "https://www.habitatlima.org/", description: "Builds and repairs affordable homes and runs a ReStore, with offices at 550 W. Elm St. in Lima." },
  { name: "Lima Family YMCA", category: "Community & Social", subcategory: "YMCA", url: "http://www.limaymca.net/", description: "Fitness, aquatics, child care and youth programs at 345 S. Elizabeth St. in Lima." },
  { name: "Allen County Council on Aging", category: "Community & Social", subcategory: "Seniors", url: "https://www.accoa.org/", description: "Senior services including adult day care and benefits guidance, at 700 N. Main St. in Lima." },
  { name: "Ohio SPCA Humane Society — Allen County Shelter", category: "Community & Social", subcategory: "Animal Welfare", url: "https://www.ohiospca.org/", description: "The Allen County animal shelter and adoption center at 3606 Elida Rd. in Lima, the former Humane Society of Allen County facility, run by the Ohio SPCA since 2015." },
  // ---------- Recreation & Tourism ----------
  { name: "Visit Greater Lima", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://visitgreaterlima.com/", description: "The Lima/Allen County Convention & Visitors Bureau, at 144 S. Main St., Suite 101 in Lima." },
  { name: "Johnny Appleseed Metropolitan Park District", category: "Recreation & Tourism", subcategory: "Parks", url: "https://jampd.com/", description: "The county park district, based at the McElroy Environmental Education Center, 2355 Ada Road in Lima, with 15 parks including Ottawa Metro Park, Heritage Park, Kendrick Woods and Deep Cut Historical Park on the Miami–Erie Canal near Spencerville." },
  { name: "Allen County Fair", category: "Recreation & Tourism", subcategory: "Fair", url: "https://allencofair.com/", description: "Annual fair of the Allen County Agricultural Society at the fairgrounds, 2750 Harding Highway in Lima, in late August." },
  { name: "Allen County Museum and Historical Society", category: "Recreation & Tourism", subcategory: "Museum", url: "https://allencountymuseum.org/", description: "County history museum and archives at 620 W. Market St. in Lima." },
  { name: "Delphos Canal Commission Museum", category: "Recreation & Tourism", subcategory: "Museum", url: "https://delphoscanalcommission.com/", description: "Miami & Erie Canal and local history museum at 241 N. Main St. in Delphos." },
  { name: "Veterans Memorial Civic and Convention Center", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://limaciviccenter.com/", description: "Concerts, touring Broadway and conventions at 7 Town Square in Lima." },
  { name: "Lima Symphony Orchestra", category: "Recreation & Tourism", subcategory: "Arts", url: "https://www.limasymphony.com/", description: "Professional orchestra with offices at 1028 W. Market St. in Lima." },
  { name: "ArtSpace/Lima", category: "Recreation & Tourism", subcategory: "Arts", url: "https://artspacelima.com/", description: "Nonprofit visual arts center with galleries, classes and the downtown ArtWalk at 65–67 Town Square in Lima." },
  { name: "Lima Locos", category: "Recreation & Tourism", subcategory: "Sports", url: "https://www.limalocos.net/", description: "Great Lakes Summer Collegiate League baseball team playing at Simmons Field in Lima." },
  // ---------- News & Media ----------
  { name: "The Lima News", category: "News & Media", subcategory: "Newspaper", url: "https://www.limaohio.com/", description: "Daily newspaper for Lima and Allen County, with offices at 205 W. Market St., Suite 100A in Lima." },
  { name: "Delphos Herald", category: "News & Media", subcategory: "Newspaper", url: "https://www.delphosherald.com/", description: "Community newspaper for Delphos and the Allen–Van Wert area, owned by CherryRoad Media since 2024." },
  { name: "Bluffton Icon", category: "News & Media", subcategory: "Online News", url: "https://www.blufftonicon.com/", description: "Free daily-updated online news for Bluffton, published since 2009." },
  { name: "Hometown Stations — WLIO / WOHL", category: "News & Media", subcategory: "TV", url: "https://www.hometownstations.com/", description: "News site of WLIO (NBC/Fox) and WOHL-CD (ABC/CBS), the Lima market's stations, at 1424 Rice Ave. in Lima." },
  { name: "WTLW TV44", category: "News & Media", subcategory: "TV", url: "https://www.actsministries.com/wtlw", description: "Christian and family station of ACTS Ministries at 1844 Baty Road in Lima, carrying local sports on 44.2; the full-power station's call sign became WLMA in 2022." },
  { name: "NewsRadio 1150 WIMA", category: "News & Media", subcategory: "Radio", url: "https://1150wima.iheart.com/", description: "iHeartMedia news/talk station licensed to Lima, with local news, weather and sports." },
  { name: "T102 WIMT", category: "News & Media", subcategory: "Radio", url: "https://t102.iheart.com/", description: "iHeartMedia country station, 102.1 FM, licensed to Lima." },
  { name: "107.5 The Big Buck WZRX", category: "News & Media", subcategory: "Radio", url: "https://1075thebigbuck.iheart.com/", description: "iHeartMedia oldies station licensed to Fort Shawnee." },
  { name: "The Legend 98.5 / 940 WCIT", category: "News & Media", subcategory: "Radio", url: "https://940wcit.com/", description: "Woof Boom Radio classic country station licensed to Lima." },
  { name: "104.9 The Eagle WEGE", category: "News & Media", subcategory: "Radio", url: "https://1049theeagle.com/", description: "Woof Boom Radio classic rock station licensed to Lima." },
  { name: "93.1 The Fan WWSR", category: "News & Media", subcategory: "Radio", url: "https://931thefan.com/", description: "Woof Boom Radio ESPN and local sports station licensed to Lima." },
  { name: "Fun 107.1 WDOH", category: "News & Media", subcategory: "Radio", url: "https://fun1071fm.com/", description: "Woof Boom Radio classic hits station licensed to Delphos, carrying Delphos-area sports." },
  { name: "WTGN 97.7 The Good News", category: "News & Media", subcategory: "Radio", url: "https://wtgn.org/", description: "Christian teaching and music station of Associated Christian Broadcasters at 1600 Elida Road in Lima." },
];
