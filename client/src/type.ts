export type SignUpProps = {
    username: string,
    email: string,
    password: string,
}

export type SignInProps = {
    email: string,
    password: string,
}

export type ReviewsProps = {
    comment: string,
    rating: number,
    bookId: any,
}


export type Review = {
    _id: string;
    rating: number;
    comment: string;
    book: {
      _id: string;
      title: string;
      author: string;
      description: string;
    };
    bookId: string;      
    user: {
        _id: string;     
        username: string;
    };
};


export type Book = {
    _id: string;
    title: string;
    author: string;
    ISBN: string;        
    publicationDate: string;
    genre: string;
    price: number;
    stock: number;
    description: string;
    coverImage: string;
    reviews: Review[];
    user: {
        _id: string;    
        username: string; 
    };
};
