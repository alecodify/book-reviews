import { SignUpProps, SignInProps, ReviewsProps } from './type';

export const register = async (data: SignUpProps) => {
    const response = await fetch('/api/auth/signup', {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    const body = await response.json();

    if (!response.ok) {
        console.log("Something went wrong");
    }

    return body;
}

export const login = async (data: SignInProps) => {
    const response = await fetch(`/api/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const body = await response.json();

    if (!response.ok) {
        console.log("Something went wrong");
    }

    return body;
}

export const fetchAllBooks = async () => {
    const response = await fetch(`/api/books/`);

    const data = await response.json();

    if (!response.ok) {
        console.log("Something went wrong");
    }

    return data;
}

export const fetchBookByID = async (id: any) => {
    const response = await fetch(`/api/books/${id}`);

    const data = await response.json();

    if (!response.ok) {
        console.log("Something went wrong");
    }

    return data;
}

export const addReview = async (data: ReviewsProps) => {
    const response = await fetch('/api/reviews/create', {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    const body = await response.json();

    if (!response.ok) {
        console.log("Something went wrong");
    }

    return body;
}

export const fetchLoggedInUser = async() => {
    const response = await fetch(`/api/users/user`);

    const data = await response.json();

    if (!response.ok) {
        console.log("Something went wrong");
    }

    return data;
}

export const updateReview = async (id: string, updatedData: Partial<ReviewsProps>) => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
    });

    const body = await response.json();

    if (!response.ok) {
        console.log("Something went wrong while updating the review");
    }

    return body;
}

export const deleteReview = async (id: string) => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: "DELETE",
        credentials: "include",
    });

    const body = await response.json();

    if (!response.ok) {
        console.log("Something went wrong while deleting the review");
    }

    return body;
}

export const logout = async () => {
    const response = await fetch(`/api/auth/signout`, {
        method: 'POST',
        credentials: 'include', 
    });

    const body = await response.json();

    if (!response.ok) {
        console.log("Something went wrong while logging out:", body.message);
    }

    return body;
}