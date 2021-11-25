
let books = [
    {
    Name:'Javascript For Begginners',
    Author:'Dhruvil Sangani',
    ReadingStatus: true

    },

    {

    Name:'Java For Begginners',
    Author:'Niket',
    ReadingStatus: true

    },

    {

        Name:'Angular For Begginners',
        Author:'XYZ',
        ReadingStatus: false
    
    
        }];


   for(let i=0;i<books.length;i++) {

    let book = "'" + books[i].Name + "Author is " + books[i].Author + " Reading status "+ books[i].ReadingStatus ;

    if(books[i].ReadingStatus) {

       console.log("ALREADY READ"+book);


    }

    else {

        console.log("Not Readed" + book);

    }


   }     




