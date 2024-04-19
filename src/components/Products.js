import ProductFilters from "./ProductFilters";
import '../style/Products.css';
import ProductCard from "./ProductCard";
import React from 'react';


const booksData = [
  {
    "model": "BooklandAPI.product",
    "pk": 1,
    "fields": {
      "image": "images/product-images/1.jpeg",
      "title": "East African Folktales",
      "author": "Jake Jackson",
      "price": 25000,
      "availability": 100,
      "rating": 4.5,
      "number_of_ratings": 1,
      "category": "Fiction"
    }
  },
  {
    "model": "BooklandAPI.product",
    "pk": 2,
    "fields": {
      "image": "images/product-images/2.jpeg",
      "title": "Tales of East Africa",
      "author": "Jamilla Okubo",
      "price": 25000,
      "availability": 100,
      "rating": 3.6,
      "number_of_ratings": 1,
      "category": "Romance"
    }
  },
  {
    "model": "BooklandAPI.product",
    "pk": 3,
    "fields": {
      "image": "images/product-images/9.jpeg",
      "title": "Oliver Twist",
      "author": "Charles Dickens",
      "price": 25000,
      "availability": 100,
      "rating": 5,
      "number_of_ratings": 1,
      "category": "Adventure"
    }
  },
  {
    "model": "BooklandAPI.product",
    "pk": 4,
    "fields": {
      "image": "images/product-images/6.jpeg",
      "title": "Cowrie of Hope",
      "author": "Binwell Sinyangwe",
      "price": 25000,
      "availability": 100,
      "rating": 3.7,
      "number_of_ratings": 1,
      "category": "Romance"
    }
  },
  {
    "model": "BooklandAPI.product",
    "pk": 5,
    "fields": {
      "image": "images/product-images/8.jpeg",
      "title": "Betrayal In The City",
      "author": "Francis Imbuga",
      "price": 25000,
      "availability": 100,
      "rating": 4.6,
      "number_of_ratings": 1,
      "category": "Crime"
    }
  },
  {
    "model": "BooklandAPI.product",
    "pk": 6,
    "fields": {
      "image": "images/product-images/5.jpeg",
      "title": "Curse of The Sacred Cow",
      "author": "Mary Karooro Okurut",
      "price": 25000,
      "availability": 100,
      "rating": 5,
      "number_of_ratings": 1,
      "category": "Children"
    }
  },
  {
    "model": "BooklandAPI.product",
    "pk": 7,
    "fields": {
      "image": "images/product-images/7.jpeg",
      "title": "The Government Inspector",
      "author": "Nikolai Gogol",
      "price": 25000,
      "availability": 100,
      "rating": 4,
      "number_of_ratings": 1,
      "category": "Crime"
    }
  },
  {
    "model": "BooklandAPI.product",
    "pk": 8,
    "fields": {
      "image": "images/product-images/3.jpeg",
      "title": "Animal Farm",
      "author": "George Orwell",
      "price": 25000,
      "availability": 100,
      "rating": 2.4,
      "number_of_ratings": 1,
      "category": "Fiction"
    }
  },
  {
    "model": "BooklandAPI.product",
    "pk": 9,
    "fields": {
      "image": "images/product-images/10.jpeg",
      "title": "Understanding Chemistry",
      "author": "Kaweesi Livingstone",
      "price": 25000,
      "availability": 100,
      "rating": 3.4,
      "number_of_ratings": 1,
      "category": "Children"
    }
  },
  {
    "model": "BooklandAPI.product",
    "pk": 10,
    "fields": {
      "image": "images/product-images/4.jpeg",
      "title": "The Floods",
      "author": "John Ruganda",
      "price": 25000,
      "availability": 100,
      "rating": 3.4,
      "number_of_ratings": 1,
      "category": "Romance"
    }
  },
  {
    "model": "BooklandAPI.product",
    "pk": 11,
    "fields": {
      "image": "images/product-images/11.jpeg",
      "title": "We Are All Birds Of Uganda",
      "author": "Malorie Blackman",
      "price": 25000,
      "availability": 100,
      "rating": 3.4,
      "number_of_ratings": 1,
      "category": "Romance"
    }
  }
  // Yooo Add more book objects here...
];

function Products() {
  const renderProducts = (
    <section id='products-page'>
      <p className="section-title">OUR PRODUCTS</p>
      <div id='products'>
        <ProductFilters/>
        {
          booksData.map((book) => (
            <ProductCard key={book.pk} product={book.fields} />
          ))
        }
      </div>
    </section>
  );

  return renderProducts;
}

export default Products;