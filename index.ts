/**
 * Function that greets a person
 * @param firstname Tobias-André
 * @param lastname Hole
 */

export const greeting = (firstname: string, lastname: string) => {
	console.log(`Hello ${firstname} ${lastname}`);
};

const people = [
	{ firstname: "Arne", lastname: "Arnesen" },
	{ firstname: "Magnus", lastname: "Magnusson" },
	{ firstname: "Siri", lastname: "Sirisen" },
	{ firstname: "Stefan", lastname: "Stefanson" },
  ];
  
  export const greetTheGang = () => {
	people.forEach((person) => {
	  greeting(person.firstname, person.lastname);
	});
  };