function jsonManipulation(){
    let person = {
        "name" : "Kristina Finley",
        "email" : "kfinley@umd.edu",
        "admissionYear" : 2021
    }
    console.log("JSON:", person)
    const stringified = JSON.stringify(person)
    console.log("Stringified:", stringified)

    const parsed = JSON.parse(stringified)
    console.log("Parsed:", parsed)
    console.log("Email:", parsed.email)
}