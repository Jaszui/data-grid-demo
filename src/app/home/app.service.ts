import { Injectable } from '@angular/core';

export class Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Prefix: string;
  Position: string;
  BirthDate: string;
  HireDate: string;
  Notes: string;
  Address: string;
  StateID: number;
}
export class Workers {
  ID: number;
  Head_ID: number;
  Full_Name: string;
  Prefix: string;
  Title: string;
  City: string;
  State: string;
  Email: string;
  Skype: string;
  Mobile_Phone: string;
  Birth_Date: string;
  Hire_Date: string;
}


export class State {
  ID: number;
  Name: string;
}

const employees: Employee[] = [{
  'ID': 1,
  'FirstName': 'John',
  'LastName': 'Heart',
  'Prefix': 'Mr.',
  'Position': 'CEO',
  'BirthDate': '1964/03/16',
  'HireDate': '1995/01/15',
  'Notes': 'John has bee',
  'Address': '351 S Hill St.',
  'StateID': 5
}, {
  'ID': 2,
  'FirstName': 'Olivia',
  'LastName': 'Peyton',
  'Prefix': 'Mrs.',
  'Position': 'Sales Assistant',
  'BirthDate': '1981/06/03',
  'HireDate': '2012/05/14',
  'Notes': 'Olivia loves to sell. She has beenher first child in 6 months. Good Luck Olivia.',
  'Address': '807 W Paseo Del Mar',
  'StateID': 5
}, {
  'ID': 3,
  'FirstName': 'Robert',
  'LastName': 'Reagan',
  'Prefix': 'Mr.',
  'Position': 'CMO',
  'BirthDate': '1974/09/07',
  'HireDate': '2002/11/08',
  'Notes': 'Robert was recently voted the bert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.',
  'Address': '4 Westmoreland Pl.',
  'StateID': 4
}, {
  'ID': 4,
  'FirstName': 'Greta',
  'LastName': 'Sims',
  'Prefix': 'Ms.',
  'Position': 'HR Manager',
  'BirthDate': '1977/11/22',
  'HireDate': '1998/04/23',
  'Notes': 'Greta has beenurrently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.',
  'Address': '1700 S Grandview Dr.',
  'StateID': 11
}, {
  'ID': 5,
  'FirstName': 'Brett',
  'LastName': 'Wade',
  'Prefix': 'Mr.',
  'Position': 'IT Manager',
  'BirthDate': '1968/12/01',
  'HireDate': '2009/03/06',
  'Notes': 'Brett came to DevAv from Microsofn he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).',
  'Address': '1120 Old Mill Rd.',
  'StateID': 13
}, {
  'ID': 6,
  'FirstName': 'Sandra',
  'LastName': 'Johnson',
  'Prefix': 'Mrs.',
  'Position': 'Controller',
  'BirthDate': '1974/11/15',
  'HireDate': '2005/05/11',
  'Notes': 'Sandra is eract with staff so iftain to dra has 2 daughters both of whom are accomplished gymnasts.',
  'Address': '4600 N Virginia Rd.',
  'StateID': 44
}, {
  'ID': 7,
  'FirstName': 'Kevin',
  'LastName': 'Carter',
  'Prefix': 'Mr.',
  'Position': 'Shipping Manager',
  'BirthDate': '1978/01/09',
  'HireDate': '2009/08/11',
  'Notes': 'Kevin is our hard-wor he is usually on the basketball court playing pick-up games.',
  'Address': '424 N Main St.',
  'StateID': 5
}, {
  'ID': 8,
  'FirstName': 'Cynthia',
  'LastName': 'Stanwick',
  'Prefix': 'Ms.',
  'Position': 'HR Assistant',
  'BirthDate': '1985/06/05',
  'HireDate': '2008/03/24',
  'Notes': 'Cindy joined us in 2008 and mployee of the month. Way to go Cindy!',
  'Address': '2211 Bonita Dr.',
  'StateID': 4
}, {
  'ID': 9,
  'FirstName': 'Kent',
  'LastName': 'Samuelson',
  'Prefix': 'Dr.',
  'Position': 'Ombudsman',
  'BirthDate': '1972/09/11',
  'HireDate': '2009/04/22',
  'Notes': 'As our ombudprobis a classically trained musician and is a member of the Chamber Orchestra.',
  'Address': '12100 Mora Dr',
  'StateID': 26
}, {
  'ID': 10,
  'FirstName': 'Taylor',
  'LastName': 'Riley',
  'Prefix': 'Mr.',
  'Position': 'Network Admin',
  'BirthDate': '1982/08/14',
  'HireDate': '2012/04/14',
  'Notes': 'If you aou\'ve probably reached out for help from Taylor. He does a great job as a member of our IT department.',
  'Address': '7776 Torreyson Dr',
  'StateID': 5
}, {
  'ID': 11,
  'FirstName': 'Sam',
  'LastName': 'Hill',
  'Prefix': 'Mr.',
  'Position': 'Sales Assistant',
  'BirthDate': '1984/02/17',
  'HireDate': '2012/02/01',
  'Notes': 'Sammy is proud to d has been in the sales departmked up golf so you can find him on the links every weekend.',
  'Address': '645 Prospect Crescent',
  'StateID': 11
}, {
  'ID': 12,
  'FirstName': 'Kelly',
  'LastName': 'Rodriguez',
  'Prefix': 'Ms.',
  'Position': 'Support Assistant',
  'BirthDate': '1988/05/11',
  'HireDate': '2012/10/13',
  'Notes': 'Kelly loves people and that\'s eople in the company, she does stand-up on the weekends at the Laugh Factory.',
  'Address': '1601 W Mountain St.',
  'StateID': 5
}, {
  'ID': 13,
  'FirstName': 'Natalie',
  'LastName': 'Maguirre',
  'Prefix': 'Mrs.',
  'Position': 'Trainer',
  'BirthDate': '1977/10/07',
  'HireDate': '2008/06/19',
  'Notes': 'Natalie travels the US and teaches our r products to cusa proud wife and mom and volunteers her time at the elementary school.',
  'Address': '6400 E Bixby Hill Rd',
  'StateID': 29
}, {
  'ID': 14,
  'FirstName': 'Walter',
  'LastName': 'Hobbs',
  'Prefix': 'Mr.',
  'Position': 'Programmer',
  'BirthDate': '1984/12/24',
  'HireDate': '2011/02/17',
  'Notes': 'Walter has been dev2011. His passion is software and if you evehours straight - writing code and fixing bugs.',
  'Address': '10385 Shadow Oak Dr',
  'StateID': 13
}];

const states: State[] = [{
  'ID': 1,
  'Name': 'Alabama'
}, {
  'ID': 2,
  'Name': 'Alaska'
}, {
  'ID': 3,
  'Name': 'Arizona'
}, {
  'ID': 4,
  'Name': 'Arkansas'
}, {
  'ID': 5,
  'Name': 'California'
}, {
  'ID': 6,
  'Name': 'Colorado'
}, {
  'ID': 7,
  'Name': 'Connecticut'
}, {
  'ID': 8,
  'Name': 'Delaware'
}, {
  'ID': 9,
  'Name': 'District of Columbia'
}, {
  'ID': 10,
  'Name': 'Florida'
}, {
  'ID': 11,
  'Name': 'Georgia'
}, {
  'ID': 12,
  'Name': 'Hawaii'
}, {
  'ID': 13,
  'Name': 'Idaho'
}, {
  'ID': 14,
  'Name': 'Illinois'
}, {
  'ID': 15,
  'Name': 'Indiana'
}, {
  'ID': 16,
  'Name': 'Iowa'
}, {
  'ID': 17,
  'Name': 'Kansas'
}, {
  'ID': 18,
  'Name': 'Kentucky'
}, {
  'ID': 19,
  'Name': 'Louisiana'
}, {
  'ID': 20,
  'Name': 'Maine'
}, {
  'ID': 21,
  'Name': 'Maryland'
}, {
  'ID': 22,
  'Name': 'Massachusetts'
}, {
  'ID': 23,
  'Name': 'Michigan'
}, {
  'ID': 24,
  'Name': 'Minnesota'
}, {
  'ID': 25,
  'Name': 'Mississippi'
}, {
  'ID': 26,
  'Name': 'Missouri'
}, {
  'ID': 27,
  'Name': 'Montana'
}, {
  'ID': 28,
  'Name': 'Nebraska'
}, {
  'ID': 29,
  'Name': 'Nevada'
}, {
  'ID': 30,
  'Name': 'New Hampshire'
}, {
  'ID': 31,
  'Name': 'New Jersey'
}, {
  'ID': 32,
  'Name': 'New Mexico'
}, {
  'ID': 33,
  'Name': 'New York'
}, {
  'ID': 34,
  'Name': 'North Carolina'
}, {
  'ID': 35,
  'Name': 'Ohio'
}, {
  'ID': 36,
  'Name': 'Oklahoma'
}, {
  'ID': 37,
  'Name': 'Oregon'
}, {
  'ID': 38,
  'Name': 'Pennsylvania'
}, {
  'ID': 39,
  'Name': 'Rhode Island'
}, {
  'ID': 40,
  'Name': 'South Carolina'
}, {
  'ID': 41,
  'Name': 'South Dakota'
}, {
  'ID': 42,
  'Name': 'Tennessee'
}, {
  'ID': 43,
  'Name': 'Texas'
}, {
  'ID': 44,
  'Name': 'Utah'
}, {
  'ID': 45,
  'Name': 'Vermont'
}, {
  'ID': 46,
  'Name': 'Virginia'
}, {
  'ID': 47,
  'Name': 'Washington'
}, {
  'ID': 48,
  'Name': 'West Virginia'
}, {
  'ID': 49,
  'Name': 'Wisconsin'
}, {
  'ID': 50,
  'Name': 'Wyoming'
}, {
  'ID': 51,
  'Name': 'North Dakota'
}];
const workers: Workers[] = [{
  'ID': 1,
  'Head_ID': -1,
  'Full_Name': 'John Heart',
  'Prefix': 'Mr.',
  'Title': 'CEO',
  'City': 'Los Angeles',
  'State': 'California',
  'Email': 'jheart@dx-email.com',
  'Skype': 'jheart_DX_skype',
  'Mobile_Phone': '(213) 555-9392',
  'Birth_Date': '1964-03-16',
  'Hire_Date': '1995-01-15'
}, {
  'ID': 2,
  'Head_ID': 1,
  'Full_Name': 'Samantha Bright',
  'Prefix': 'Dr.',
  'Title': 'COO',
  'City': 'Los Angeles',
  'State': 'California',
  'Email': 'samanthab@dx-email.com',
  'Skype': 'samanthab_DX_skype',
  'Mobile_Phone': '(213) 555-2858',
  'Birth_Date': '1966-05-02',
  'Hire_Date': '2004-05-24'
}, {
  'ID': 3,
  'Head_ID': 1,
  'Full_Name': 'Arthur Miller',
  'Prefix': 'Mr.',
  'Title': 'CTO',
  'City': 'Denver',
  'State': 'Colorado',
  'Email': 'arthurm@dx-email.com',
  'Skype': 'arthurm_DX_skype',
  'Mobile_Phone': '(310) 555-8583',
  'Birth_Date': '1972-07-11',
  'Hire_Date': '2007-12-18'
}, {
  'ID': 4,
  'Head_ID': 1,
  'Full_Name': 'Robert Reagan',
  'Prefix': 'Mr.',
  'Title': 'CMO',
  'City': 'Bentonville',
  'State': 'Arkansas',
  'Email': 'robertr@dx-email.com',
  'Skype': 'robertr_DX_skype',
  'Mobile_Phone': '(818) 555-2387',
  'Birth_Date': '1974-09-07',
  'Hire_Date': '2002-11-08'
}, {
  'ID': 5,
  'Head_ID': 1,
  'Full_Name': 'Greta Sims',
  'Prefix': 'Ms.',
  'Title': 'HR Manager',
  'City': 'Atlanta',
  'State': 'Georgia',
  'Email': 'gretas@dx-email.com',
  'Skype': 'gretas_DX_skype',
  'Mobile_Phone': '(818) 555-6546',
  'Birth_Date': '1977-11-22',
  'Hire_Date': '1998-04-23'
}, {
  'ID': 6,
  'Head_ID': 3,
  'Full_Name': 'Brett Wade',
  'Prefix': 'Mr.',
  'Title': 'IT Manager',
  'City': 'Reno',
  'State': 'Nevada',
  'Email': 'brettw@dx-email.com',
  'Skype': 'brettw_DX_skype',
  'Mobile_Phone': '(626) 555-0358',
  'Birth_Date': '1968-12-01',
  'Hire_Date': '2009-03-06'
}, {
  'ID': 7,
  'Head_ID': 5,
  'Full_Name': 'Sandra Johnson',
  'Prefix': 'Mrs.',
  'Title': 'Controller',
  'City': 'Beaver',
  'State': 'Utah',
  'Email': 'sandraj@dx-email.com',
  'Skype': 'sandraj_DX_skype',
  'Mobile_Phone': '(562) 555-2082',
  'Birth_Date': '1974-11-15',
  'Hire_Date': '2005-05-11'
}, {
  'ID': 8,
  'Head_ID': 4,
  'Full_Name': 'Ed Holmes',
  'Prefix': 'Dr.',
  'Title': 'Sales Manager',
  'City': 'Malibu',
  'State': 'California',
  'Email': 'edwardh@dx-email.com',
  'Skype': 'edwardh_DX_skype',
  'Mobile_Phone': '(310) 555-1288',
  'Birth_Date': '1973-07-14',
  'Hire_Date': '2005-06-19'
}, {
  'ID': 9,
  'Head_ID': 3,
  'Full_Name': 'Barb Banks',
  'Prefix': 'Mrs.',
  'Title': 'Support Manager',
  'City': 'Phoenix',
  'State': 'Arizona',
  'Email': 'barbarab@dx-email.com',
  'Skype': 'barbarab_DX_skype',
  'Mobile_Phone': '(310) 555-3355',
  'Birth_Date': '1979-04-14',
  'Hire_Date': '2002-08-07'
}, {
  'ID': 10,
  'Head_ID': 2,
  'Full_Name': 'Kevin Carter',
  'Prefix': 'Mr.',
  'Title': 'Shipping Manager',
  'City': 'San Diego',
  'State': 'California',
  'Email': 'kevinc@dx-email.com',
  'Skype': 'kevinc_DX_skype',
  'Mobile_Phone': '(213) 555-2840',
  'Birth_Date': '1978-01-09',
  'Hire_Date': '2009-08-11'
}, {
  'ID': 11,
  'Head_ID': 5,
  'Full_Name': 'Cindy Stanwick',
  'Prefix': 'Ms.',
  'Title': 'HR Assistant',
  'City': 'Little Rock',
  'State': 'Arkansas',
  'Email': 'cindys@dx-email.com',
  'Skype': 'cindys_DX_skype',
  'Mobile_Phone': '(818) 555-6655',
  'Birth_Date': '1985-06-05',
  'Hire_Date': '2008-03-24'
}, {
  'ID': 12,
  'Head_ID': 8,
  'Full_Name': 'Sammy Hill',
  'Prefix': 'Mr.',
  'Title': 'Sales Assistant',
  'City': 'Pasadena',
  'State': 'California',
  'Email': 'sammyh@dx-email.com',
  'Skype': 'sammyh_DX_skype',
  'Mobile_Phone': '(626) 555-7292',
  'Birth_Date': '1984-02-17',
  'Hire_Date': '2012-02-01'
}, {
  'ID': 13,
  'Head_ID': 10,
  'Full_Name': 'Davey Jones',
  'Prefix': 'Mr.',
  'Title': 'Shipping Assistant',
  'City': 'Pasadena',
  'State': 'California',
  'Email': 'davidj@dx-email.com',
  'Skype': 'davidj_DX_skype',
  'Mobile_Phone': '(626) 555-0281',
  'Birth_Date': '1983-03-06',
  'Hire_Date': '2011-04-24'
}, {
  'ID': 14,
  'Head_ID': 10,
  'Full_Name': 'Victor Norris',
  'Prefix': 'Mr.',
  'Title': 'Shipping Assistant',
  'City': 'Little Rock',
  'State': 'Arkansas',
  'Email': 'victorn@dx-email.com',
  'Skype': 'victorn_DX_skype',
  'Mobile_Phone': '(213) 555-9278',
  'Birth_Date': '1986-07-23',
  'Hire_Date': '2012-07-23'
}, {
  'ID': 15,
  'Head_ID': 10,
  'Full_Name': 'Mary Stern',
  'Prefix': 'Ms.',
  'Title': 'Shipping Assistant',
  'City': 'Beaver',
  'State': 'Utah',
  'Email': 'marys@dx-email.com',
  'Skype': 'marys_DX_skype',
  'Mobile_Phone': '(818) 555-7857',
  'Birth_Date': '1982-04-08',
  'Hire_Date': '2012-08-12'
}, {
  'ID': 16,
  'Head_ID': 10,
  'Full_Name': 'Robin Cosworth',
  'Prefix': 'Mrs.',
  'Title': 'Shipping Assistant',
  'City': 'Los Angeles',
  'State': 'California',
  'Email': 'robinc@dx-email.com',
  'Skype': 'robinc_DX_skype',
  'Mobile_Phone': '(818) 555-0942',
  'Birth_Date': '1981-06-12',
  'Hire_Date': '2012-09-01'
}, {
  'ID': 17,
  'Head_ID': 9,
  'Full_Name': 'Kelly Rodriguez',
  'Prefix': 'Ms.',
  'Title': 'Support Assistant',
  'City': 'Boise',
  'State': 'Idaho',
  'Email': 'kellyr@dx-email.com',
  'Skype': 'kellyr_DX_skype',
  'Mobile_Phone': '(818) 555-9248',
  'Birth_Date': '1988-05-11',
  'Hire_Date': '2012-10-13'
}, {
  'ID': 18,
  'Head_ID': 9,
  'Full_Name': 'James Anderson',
  'Prefix': 'Mr.',
  'Title': 'Support Assistant',
  'City': 'Atlanta',
  'State': 'Georgia',
  'Email': 'jamesa@dx-email.com',
  'Skype': 'jamesa_DX_skype',
  'Mobile_Phone': '(323) 555-4702',
  'Birth_Date': '1987-01-29',
  'Hire_Date': '2012-10-18'
}, {
  'ID': 19,
  'Head_ID': 9,
  'Full_Name': 'Antony Remmen',
  'Prefix': 'Mr.',
  'Title': 'Support Assistant',
  'City': 'Boise',
  'State': 'Idaho',
  'Email': 'anthonyr@dx-email.com',
  'Skype': 'anthonyr_DX_skype',
  'Mobile_Phone': '(310) 555-6625',
  'Birth_Date': '1986-02-19',
  'Hire_Date': '2013-01-19'
}, {
  'ID': 20,
  'Head_ID': 8,
  'Full_Name': 'Olivia Peyton',
  'Prefix': 'Mrs.',
  'Title': 'Sales Assistant',
  'City': 'Atlanta',
  'State': 'Georgia',
  'Email': 'oliviap@dx-email.com',
  'Skype': 'oliviap_DX_skype',
  'Mobile_Phone': '(310) 555-2728',
  'Birth_Date': '1981-06-03',
  'Hire_Date': '2012-05-14'
}, {
  'ID': 21,
  'Head_ID': 6,
  'Full_Name': 'Taylor Riley',
  'Prefix': 'Mr.',
  'Title': 'Network Admin',
  'City': 'San Jose',
  'State': 'California',
  'Email': 'taylorr@dx-email.com',
  'Skype': 'taylorr_DX_skype',
  'Mobile_Phone': '(310) 555-7276',
  'Birth_Date': '1982-08-14',
  'Hire_Date': '2012-04-14'
}, {
  'ID': 22,
  'Head_ID': 6,
  'Full_Name': 'Amelia Harper',
  'Prefix': 'Mrs.',
  'Title': 'Network Admin',
  'City': 'Los Angeles',
  'State': 'California',
  'Email': 'ameliah@dx-email.com',
  'Skype': 'ameliah_DX_skype',
  'Mobile_Phone': '(213) 555-4276',
  'Birth_Date': '1983-11-19',
  'Hire_Date': '2011-02-10'
}, {
  'ID': 23,
  'Head_ID': 6,
  'Full_Name': 'Wally Hobbs',
  'Prefix': 'Mr.',
  'Title': 'Programmer',
  'City': 'Chatsworth',
  'State': 'California',
  'Email': 'wallyh@dx-email.com',
  'Skype': 'wallyh_DX_skype',
  'Mobile_Phone': '(818) 555-8872',
  'Birth_Date': '1984-12-24',
  'Hire_Date': '2011-02-17'
}, {
  'ID': 24,
  'Head_ID': 6,
  'Full_Name': 'Brad Jameson',
  'Prefix': 'Mr.',
  'Title': 'Programmer',
  'City': 'San Fernando',
  'State': 'California',
  'Email': 'bradleyj@dx-email.com',
  'Skype': 'bradleyj_DX_skype',
  'Mobile_Phone': '(818) 555-4646',
  'Birth_Date': '1988-10-12',
  'Hire_Date': '2011-03-02'
}, {
  'ID': 25,
  'Head_ID': 6,
  'Full_Name': 'Karen Goodson',
  'Prefix': 'Miss',
  'Title': 'Programmer',
  'City': 'South Pasadena',
  'State': 'California',
  'Email': 'kareng@dx-email.com',
  'Skype': 'kareng_DX_skype',
  'Mobile_Phone': '(626) 555-0908',
  'Birth_Date': '1987-04-26',
  'Hire_Date': '2011-03-14'
}, {
  'ID': 26,
  'Head_ID': 5,
  'Full_Name': 'Marcus Orbison',
  'Prefix': 'Mr.',
  'Title': 'Travel Coordinator',
  'City': 'Los Angeles',
  'State': 'California',
  'Email': 'marcuso@dx-email.com',
  'Skype': 'marcuso_DX_skype',
  'Mobile_Phone': '(213) 555-7098',
  'Birth_Date': '1982-03-02',
  'Hire_Date': '2005-05-19'
}, {
  'ID': 27,
  'Head_ID': 5,
  'Full_Name': 'Sandy Bright',
  'Prefix': 'Ms.',
  'Title': 'Benefits Coordinator',
  'City': 'Denver',
  'State': 'Colorado',
  'Email': 'sandrab@dx-email.com',
  'Skype': 'sandrab_DX_skype',
  'Mobile_Phone': '(818) 555-0524',
  'Birth_Date': '1983-09-11',
  'Hire_Date': '2005-06-04'
}, {
  'ID': 28,
  'Head_ID': 6,
  'Full_Name': 'Morgan Kennedy',
  'Prefix': 'Mrs.',
  'Title': 'Graphic Designer',
  'City': 'San Fernando Valley',
  'State': 'California',
  'Email': 'morgank@dx-email.com',
  'Skype': 'morgank_DX_skype',
  'Mobile_Phone': '(818) 555-8238',
  'Birth_Date': '1984-07-17',
  'Hire_Date': '2012-01-11'
}, {
  'ID': 29,
  'Head_ID': 28,
  'Full_Name': 'Violet Bailey',
  'Prefix': 'Ms.',
  'Title': 'Jr Graphic Designer',
  'City': 'La Canada',
  'State': 'California',
  'Email': 'violetb@dx-email.com',
  'Skype': 'violetb_DX_skype',
  'Mobile_Phone': '(818) 555-2478',
  'Birth_Date': '1985-06-10',
  'Hire_Date': '2012-01-19'
}, {
  'ID': 30,
  'Head_ID': 5,
  'Full_Name': 'Ken Samuelson',
  'Prefix': 'Dr.',
  'Title': 'Ombudsman',
  'City': 'St. Louis',
  'State': 'Missouri',
  'Email': 'kents@dx-email.com',
  'Skype': 'kents_DX_skype',
  'Mobile_Phone': '(562) 555-9282',
  'Birth_Date': '1972-09-11',
  'Hire_Date': '2009-04-22'
}];

@Injectable()
export class Service {
  getEmployees() {
    return employees;
  }
  getStates() {
    return states;
  }
  getWorkers(): Workers[] {
    return workers;
  }
}
