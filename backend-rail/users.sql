CREATE TABLE individuals (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE corporates (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    type_of_business VARCHAR(255) NOT NULL,
    date_of_incorporation DATE NOT NULL,
    company_email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create TABLE otps (
    email TEXT UNIQUE,
    otp VARCHAR(20),
    expires_at VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)