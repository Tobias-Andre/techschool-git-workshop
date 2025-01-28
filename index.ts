/**
 * Function that greets a person
 * @param firstname Tobias-André
 * @param lastname Hole
 */

export const greeting = (firstname: string, lastname: string) => {
	console.log(`Hello ${firstname} ${lastname}`);
};

const people = [
	{ firstname: "Magnus", lastname: "Magnusson" },
	{ firstname: "Stefan", lastname: "Stefanson" },
  ];
  
  export const greetTheGang = () => {
	people.forEach((person) => {
	  greeting(person.firstname, person.lastname);
	});
  };
