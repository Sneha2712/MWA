function appendData() {
    e.preventDefault();

    // Retrieve form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var club = "club 1";

    const createCsvWriter = require('csv-writer').createObjectCsvWriter;

    // Define the CSV file path
    const csvFilePath = 'club1.csv';

    // Create a CSV writer
    const csvWriter = createCsvWriter({
      path: csvFilePath,
      header: [
        { id: 'name', title: 'Name' },
        { id: 'email', title: 'Email' },
        { id: 'club', title: 'Club' }
      ],
      append: true
    });

    // Create a data object
    const data = [
      {
        name: name,
        email: email,
        club: club
      }
    ];

    // Append the data to the CSV file
    csvWriter.writeRecords(data)
      .then(() => {
        console.log('Data appended successfully!');
      })
      .catch((error) => {
        console.error('Error appending data:', error);
      });

  }