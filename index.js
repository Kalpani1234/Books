document.addEventListener("DOMContentLoaded", function () {
  // Toggle navbar on menu icon click
  let navbar = document.querySelector(".navbar");
  document.querySelector("#menu-bar").onclick = () => {
    navbar.classList.toggle("active");
  };

  // Toggle search bar on search icon click
  let search = document.querySelector(".search");
  document.querySelector("#search").onclick = () => {
    search.classList.toggle("active");
  };

  // Add event listener to search input
  document.querySelector(".search input").addEventListener("input", searchBooks);

  // Search books function
  function searchBooks(e) {
    const searchTerm = e.target.value.toLowerCase();
    const matchedBooks = books.filter((book) => book.title.toLowerCase().includes(searchTerm));

    displaySearchResults(matchedBooks);
  }

  // Display search results function
  function displaySearchResults(books) {
    const searchResultsContainer = document.querySelector(".search-results");
    if (!searchResultsContainer) return;

    if (books.length > 0) {
      searchResultsContainer.innerHTML = books.map((book) => `<li>${book.title}</li>`).join("");
    } else {
      searchResultsContainer.innerHTML = "<li>No books found</li>";
    }
  }

  // Book data
  const books = [
    {
      id: 1,
      title: "Famous Five",
      description: '"The Famous Five" is a series by Enid Blyton that follows the adventures of four children and their dog as they solve mysteries and uncover secrets.',
      imgSrc: "images/book1.png",
    },
    {
      id: 2,
      title: "Madol Duwa",
      description: '"Madol Duwa" is a classic Sri Lankan novel by Martin Wickramasinghe that tells the captivating tale of two young brothers\' adventures on a remote island.',
      imgSrc: "images/book2.png",
    },
    {
      id: 3,
      title: "Harry Potter",
      description: '"Harry Potter" by J.K. Rowling tells the thrilling tale of a young wizard and his friends as they confront evil in the magical world of Hogwarts.',
      imgSrc: "images/book3.png",
    },
    {
      id: 4,
      title: "Space Odessy",
      description: '"2001: A Space Odyssey" is a classic novel by Arthur C. Clarke that delves humanity\'s journey to Jupiter and the mysterious forces guiding our evolution.',
      imgSrc: "images/book4.png",
    },
    {
      id: 5,
      title: "The fraud",
      description: '"The Fraud" is a gripping thriller that delves into the world of deception and intrigue, keeping readers on the edge of their seats until the very end.',
      imgSrc: "images/book5.png",
    },
    {
      id: 6,
      title: "Elevation",
      description: '"Elevation" is a captivating novel by Stephen King, tells the story of a man who mysteriously begins to lose weight while his  mass remains unchanged.',
      imgSrc: "images/book6.png",
    },
    {
      id: 7,
      title: "The Nickel Boys",
      description: '"The Nickel Boys" is a  novel by Colson Whitehead that explores the harrowing experiences of two boys at a brutal reform school in Jim Crow-era.',
      imgSrc: "images/book7.png",
    },
    {
      id: 8,
      title: "Summer Stories",
      description: '"Summer-Time Stories" by Enid Blyton is a delightful collection of tales that capture the joys and adventures of summer holidays for children.',
      imgSrc: "images/book8.png",
    },
  ];

  // Category data
  const categories = [
    {
      id: 1,
      title: "Children's Adventure Novels",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum voluptatum corporis accusamus aperiam fugiat tempora blanditiis labore dolor aliquid maxime nobis laborum sed soluta voluptatibus aspernatur natus, dicta quisquam.",
      imgSrc: "images/cat-img3.png",
    },
    {
      id: 2,
      title: "Fantasy Literature Novels",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum voluptatum corporis accusamus aperiam fugiat tempora blanditiis labore dolor aliquid maxime nobis laborum sed soluta voluptatibus aspernatur natus, dicta quisquam.",
      imgSrc: "images/cat-img2.png",
    },
    {
      id: 3,
      title: "Science Fiction Novels",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum voluptatum corporis accusamus aperiam fugiat tempora blanditiis labore dolor aliquid maxime nobis laborum sed soluta voluptatibus aspernatur natus, dicta quisquam.",
      imgSrc: "images/cat-img1.png",
    },
  ];

  // Function to create HTML for each book
  function createBookHTML(book) {
    return `
            <div class="swiper-slide box">
                <div class="img">
                    <img src="${book.imgSrc}" alt="${book.title}">
                </div>
                <div class="product-content">
                    <h3>${book.title}</h3>
                    <p>${book.description}</p>
                    <div class="orderNow">
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        `;
  }

  function createCategoryHTML(category) {
    return `
        <div class="swiper-slide box">
            <div class="img">
                <img src="${category.imgSrc}" alt="${category.title}">
            </div>
            <div class="content">
                <h3>${category.title}</h3>
                <p>${category.description}</p>
                <a href="#categories" class="btn">learn more</a>
            </div>
        </div>
    `;
  }

  function displayCategories() {
    const container = document.querySelector(".categories .swiper-wrapper");
    if (!container) return;
    container.innerHTML = categories.map(createCategoryHTML).join("");
  }

  // Display books in the swiper container
  function displayBooks() {
    const firstFourBooks = books.slice(0, 4);
    const nextFourBooks = books.slice(4, 8);

    const container1 = document.querySelector("#product-row-1 .swiper-wrapper");
    const container2 = document.querySelector("#product-row-2 .swiper-wrapper");

    container1.innerHTML = firstFourBooks.map(createBookHTML).join("");
    container2.innerHTML = nextFourBooks.map(createBookHTML).join("");

    initializeSwipers();
  }

  displayBooks();
  displayCategories();
  initializeSwipers();

  // Initialize Swiper instances
  function initializeSwipers() {
    // Initialize Swiper for product row
    new Swiper(".product-row", {
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    new Swiper(".product-row", {
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    new Swiper(".categories-row", {
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      },
    });

    new Swiper(".review-row", {
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    const subscribeButton = document.getElementById("subscribe-button");

    subscribeButton.addEventListener("click", function () {
      this.value = "Subscribed"; // Changes the button text to 'Subscribed'
      this.disabled = true; // Optionally disable the button after clicking
      this.classList.add("subscribed"); // Optionally add a class for styling
    });
  }
});
