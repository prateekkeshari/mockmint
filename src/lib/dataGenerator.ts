import { faker } from '@faker-js/faker'

// Group data types into categories
export const dataTypeCategories = {
  "Personal": ["Name", "Email", "Phone", "Address", "Date of Birth", "Age", "Gender", "Nationality", "Occupation", "Social Security Number"],
  "Business": ["Company", "Job Title", "Department", "Industry", "Employee ID", "Business Phone", "Business Email", "Revenue", "Founded Year"],
  "Finance": ["Credit Card", "Currency", "Bitcoin Address", "Ethereum Address", "Bank Account", "IBAN", "Transaction Amount", "Stock Symbol", "Investment Type"],
  "Internet": ["IP Address", "MAC Address", "URL", "User Agent", "Domain Name", "Username", "Password", "Avatar URL", "Social Media Handle"],
  "Location": ["Country", "City", "Zip Code", "Latitude", "Longitude", "Timezone", "Street Name", "State", "County"],
  "Color": ["Color", "Hex Color", "RGB Color", "CMYK Color", "HSL Color", "HSV Color", "Pantone Color"],
  "Content": ["Sentence", "Paragraph", "Book Title", "Movie Title", "Music Genre", "Song Title", "Artist Name", "Album Name", "Hashtag"],
  "Identifiers": ["UUID", "ISBN", "File Name", "File Extension", "IMEI", "Product Key", "Serial Number", "License Plate", "Passport Number"],
  "Misc": ["Vehicle", "Animal", "Product", "Food", "Drink", "University", "Emoji", "Barcode"],
  "Tech": ["Programming Language", "Framework", "Database", "Cloud Platform", "Operating System", "Browser", "Smartphone Model", "App Name"],
  "Health": ["Blood Type", "Height", "BMI", "Disease", "Medication", "Allergy", "Medical Procedure"],
  "Education": ["Degree", "Major", "GPA", "School Name", "Graduation Year", "Student ID", "Course Name"],
  "Time": ["Time", "Date", "Day of Week", "Month", "Year", "Century", "Timestamp"],
  "Measurement": ["Length", "Volume", "Temperature", "Speed", "Pressure", "Energy"]
}

// Flatten the categories into a single array of data types
export const dataTypes = Object.values(dataTypeCategories).flat()

export function generateRandomData(type: string, count: number): string[] {
  const data: string[] = []
  for (let i = 0; i < count; i++) {
    switch (type.toLowerCase()) {
      case "name":
        data.push(faker.person.fullName())
        break
      case "email":
        data.push(faker.internet.email())
        break
      case "phone":
        data.push(faker.phone.number('###-###-####'))
        break
      case "address":
        data.push(faker.location.streetAddress())
        break
      case "date of birth":
        data.push(faker.date.birthdate().toISOString().split('T')[0])
        break
      case "age":
        data.push(faker.number.int({ min: 18, max: 100 }).toString())
        break
      case "gender":
        data.push(faker.person.sex())
        break
      case "nationality":
        data.push(faker.location.country())
        break
      case "occupation":
        data.push(faker.person.jobTitle())
        break
      case "social security number":
        data.push(faker.finance.accountNumber())
        break
      case "uuid":
        data.push(faker.string.uuid())
        break
      case "credit card":
        data.push(faker.finance.creditCardNumber())
        break
      case "company":
        data.push(faker.company.name())
        break
      case "job title":
        data.push(faker.person.jobTitle())
        break
      case "username":
        data.push(faker.internet.userName())
        break
      case "password":
        data.push(faker.internet.password())
        break
      case "ip address":
        data.push(faker.internet.ip())
        break
      case "mac address":
        data.push(faker.internet.mac())
        break
      case "url":
        data.push(faker.internet.url())
        break
      case "color":
        data.push(faker.color.human())
        break
      case "currency":
        data.push(faker.finance.currencyCode())
        break
      case "product":
        data.push(faker.commerce.productName())
        break
      case "department":
        data.push(faker.commerce.department())
        break
      case "sentence":
        data.push(faker.lorem.sentence())
        break
      case "paragraph":
        data.push(faker.lorem.paragraph())
        break
      case "image url":
        data.push(faker.image.url())
        break
      case "file name":
        data.push(faker.system.fileName())
        break
      case "mime type":
        data.push(faker.system.mimeType())
        break
      case "country":
        data.push(faker.location.country())
        break
      case "city":
        data.push(faker.location.city())
        break
      case "zip code":
        data.push(faker.location.zipCode())
        break
      case "latitude":
        data.push(faker.location.latitude().toString())
        break
      case "longitude":
        data.push(faker.location.longitude().toString())
        break
      case "vehicle":
        data.push(faker.vehicle.vehicle())
        break
      case "animal":
        data.push(faker.animal.type())
        break
      case "music genre":
        data.push(faker.music.genre())
        break
      case "movie title":
        data.push(faker.word.words(3))
        break
      case "book title":
        data.push(faker.commerce.productName())
        break
      case "isbn":
        data.push(faker.commerce.isbn())
        break
      case "timezone":
        data.push(faker.location.timeZone())
        break
      case "user agent":
        data.push(faker.internet.userAgent())
        break
      case "bitcoin address":
        data.push(faker.finance.bitcoinAddress())
        break
      case "ethereum address":
        data.push(faker.finance.ethereumAddress())
        break
      case "hex color":
        data.push(faker.color.rgb({ format: 'hex', casing: 'lower' }))
        break
      case "rgb color":
        data.push(faker.color.rgb())
        break
      case "cmyk color":
        data.push(faker.color.cmyk().toString())
        break
      case "hsl color":
        data.push(faker.color.hsl().toString())
        break
      case "file size":
        data.push(faker.number.int({ min: 1, max: 1000 }) + ' MB')
        break
      case "file extension":
        data.push(faker.system.fileExt())
        break
      case "industry":
        data.push(faker.company.buzzNoun())
        break
      case "employee id":
        data.push(faker.string.alphanumeric(8).toUpperCase())
        break
      case "business phone":
        data.push(faker.phone.number('###-###-####'))
        break
      case "business email":
        data.push(faker.internet.email({ provider: 'business.com' }))
        break
      case "revenue":
        data.push('$' + faker.finance.amount(10000, 1000000000, 2))
        break
      case "founded year":
        data.push(faker.date.past({ years: 100 }).getFullYear().toString())
        break
      case "bank account":
        data.push(faker.finance.accountNumber())
        break
      case "iban":
        data.push(faker.finance.iban())
        break
      case "transaction amount":
        data.push('$' + faker.finance.amount(1, 10000, 2))
        break
      case "stock symbol":
        data.push(faker.finance.currencyCode())
        break
      case "investment type":
        data.push(faker.finance.transactionType())
        break
      case "domain name":
        data.push(faker.internet.domainName())
        break
      case "avatar url":
        data.push(faker.image.avatar())
        break
      case "social media handle":
        data.push('@' + faker.internet.userName())
        break
      case "street name":
        data.push(faker.location.street())
        break
      case "state":
        data.push(faker.location.state())
        break
      case "county":
        data.push(faker.location.county())
        break
      case "hsv color":
        data.push(`hsv(${faker.number.int(360)}, ${faker.number.int(100)}%, ${faker.number.int(100)}%)`)
        break
      case "pantone color":
        data.push(faker.color.human() + ' ' + faker.number.int({ min: 100, max: 999 }))
        break
      case "song title":
        data.push(faker.music.songName())
        break
      case "artist name":
        data.push(faker.person.fullName())
        break
      case "album name":
        data.push(faker.commerce.productName())
        break
      case "hashtag":
        data.push('#' + faker.lorem.word())
        break
      case "imei":
        data.push(faker.phone.imei())
        break
      case "product key":
        data.push(faker.string.alphanumeric(25).toUpperCase())
        break
      case "serial number":
        data.push(faker.string.alphanumeric(12).toUpperCase())
        break
      case "license plate":
        data.push(faker.vehicle.vrm())
        break
      case "passport number":
        data.push(faker.string.alphanumeric(9).toUpperCase())
        break
      case "food":
        data.push(faker.commerce.product())
        break
      case "drink":
        data.push(faker.commerce.productName())
        break
      case "university":
        data.push(faker.company.name() + ' University')
        break
      case "emoji":
        data.push(faker.internet.emoji())
        break
      case "barcode":
        data.push(faker.commerce.isbn())
        break
      case "programming language":
        data.push(faker.helpers.arrayElement(['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'PHP', 'Swift', 'Go', 'Rust', 'TypeScript']))
        break
      case "framework":
        data.push(faker.helpers.arrayElement(['React', 'Angular', 'Vue', 'Django', 'Flask', 'Spring', 'Laravel', 'Express', 'ASP.NET', 'Ruby on Rails']))
        break
      case "database":
        data.push(faker.helpers.arrayElement(['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQLite', 'Microsoft SQL Server', 'Redis', 'Cassandra', 'MariaDB', 'Elasticsearch']))
        break
      case "cloud platform":
        data.push(faker.helpers.arrayElement(['AWS', 'Google Cloud', 'Microsoft Azure', 'IBM Cloud', 'Oracle Cloud', 'DigitalOcean', 'Heroku', 'Alibaba Cloud', 'VMware', 'Rackspace']))
        break
      case "operating system":
        data.push(faker.helpers.arrayElement(['Windows', 'macOS', 'Linux', 'iOS', 'Android', 'Chrome OS', 'FreeBSD', 'Solaris', 'Ubuntu', 'Fedora']))
        break
      case "browser":
        data.push(faker.helpers.arrayElement(['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera', 'Internet Explorer', 'Brave', 'Vivaldi', 'Tor Browser', 'DuckDuckGo Browser']))
        break
      case "smartphone model":
        data.push(faker.helpers.arrayElement(['iPhone 12', 'Samsung Galaxy S21', 'Google Pixel 5', 'OnePlus 9', 'Huawei P40', 'Xiaomi Mi 11', 'Sony Xperia 1 III', 'LG Velvet', 'Motorola Edge', 'Nokia 8.3']))
        break
      case "app name":
        data.push(faker.company.name() + ' App')
        break
      case "blood type":
        data.push(faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']))
        break
      case "height":
        data.push(faker.number.int({ min: 150, max: 200 }) + ' cm')
        break
      case "bmi":
        data.push(faker.number.float({ min: 18.5, max: 30, precision: 0.1 }).toString())
        break
      case "disease":
        data.push(faker.helpers.arrayElement(['Influenza', 'Diabetes', 'Hypertension', 'Asthma', 'Arthritis', 'Depression', 'Alzheimer\'s', 'Cancer', 'Osteoporosis', 'Parkinson\'s']))
        break
      case "medication":
        data.push(faker.helpers.arrayElement(['Aspirin', 'Ibuprofen', 'Paracetamol', 'Amoxicillin', 'Lisinopril', 'Levothyroxine', 'Metformin', 'Amlodipine', 'Omeprazole', 'Gabapentin']))
        break
      case "allergy":
        data.push(faker.helpers.arrayElement(['Pollen', 'Dust', 'Peanuts', 'Milk', 'Eggs', 'Soy', 'Wheat', 'Fish', 'Shellfish', 'Penicillin']))
        break
      case "medical procedure":
        data.push(faker.helpers.arrayElement(['Appendectomy', 'Colonoscopy', 'Cataract Surgery', 'Hip Replacement', 'Knee Replacement', 'Coronary Bypass', 'Cesarean Section', 'Tonsillectomy', 'Gallbladder Removal', 'Hernia Repair']))
        break
      case "degree":
        data.push(faker.helpers.arrayElement(['Bachelor of Science', 'Master of Arts', 'PhD in Physics', 'Bachelor of Business Administration', 'Master of Engineering', 'Doctor of Medicine', 'Bachelor of Laws', 'Master of Fine Arts', 'Doctor of Philosophy', 'Bachelor of Education']))
        break
      case "major":
        data.push(faker.helpers.arrayElement(['Computer Science', 'Business Administration', 'Psychology', 'Engineering', 'Biology', 'Economics', 'English Literature', 'Political Science', 'Mathematics', 'Chemistry']))
        break
      case "gpa":
        data.push(faker.number.float({ min: 2.0, max: 4.0, precision: 0.1 }).toString())
        break
      case "school name":
        data.push(faker.company.name() + ' School')
        break
      case "graduation year":
        data.push(faker.date.future().getFullYear().toString())
        break
      case "student id":
        data.push(faker.string.alphanumeric(8).toUpperCase())
        break
      case "course name":
        data.push(faker.helpers.arrayElement(['Introduction to Psychology', 'Calculus I', 'World History', 'Organic Chemistry', 'Microeconomics', 'Introduction to Programming', 'English Composition', 'Statistics', 'Art History', 'Physics for Engineers']))
        break
      case "time":
        data.push(faker.date.recent().toLocaleTimeString())
        break
      case "date":
        data.push(faker.date.recent().toISOString().split('T')[0])
        break
      case "day of week":
        data.push(faker.date.weekday())
        break
      case "month":
        data.push(faker.date.month())
        break
      case "year":
        data.push(faker.date.past().getFullYear().toString())
        break
      case "century":
        data.push(faker.helpers.arrayElement(['18th', '19th', '20th', '21st']))
        break
      case "timestamp":
        data.push(faker.date.recent().getTime().toString())
        break
      case "length":
        data.push(faker.number.int({ min: 1, max: 1000 }) + ' ' + faker.helpers.arrayElement(['mm', 'cm', 'm', 'km']))
        break
      case "volume":
        data.push(faker.number.int({ min: 1, max: 1000 }) + ' ' + faker.helpers.arrayElement(['ml', 'L', 'm³']))
        break
      case "temperature":
        data.push(faker.number.int({ min: -50, max: 50 }) + '°C')
        break
      case "speed":
        data.push(faker.number.int({ min: 1, max: 300 }) + ' km/h')
        break
      case "pressure":
        data.push(faker.number.int({ min: 900, max: 1100 }) + ' hPa')
        break
      case "energy":
        data.push(faker.number.int({ min: 1, max: 1000 }) + ' kWh')
        break
      default:
        data.push(faker.lorem.word())
        break
    }
  }
  return data
}

export function exportToCSV(data: string[]): string {
  return data.join('\n')
}

export function exportToJSON(data: string[]): string {
  return JSON.stringify(data, null, 2)
}