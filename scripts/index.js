document.addEventListener('DOMContentLoaded', () => {
    GetGalleryCards();
    GetBlogCards();
    GetAboutUsCards();
})

function GetAboutUsCards(){
    const aboutCards = [
        {
            imgSrc: './assets/images/icono1.svg',
            altText: 'Seguridad',
            title: 'SEGURIDAD',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum repellendus quam magnam facere inventore accusantium! Reiciendis, expedita, voluptas animi corporis fugit quod facilis nemo porro, optio dolorem repudiandae officiis!'
        },
        {
            imgSrc: './assets/images/icono2.svg',
            altText: 'Mejores precios',
            title: 'EL MEJOR PRECIO',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum repellendus quam magnam facere inventore accusantium! Reiciendis, expedita, volupta!'
        },
        {
            imgSrc: './assets/images/icono3.svg',
            altText: 'Velocidad',
            title: 'A TIEMPO',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum repellendus quam magnam facere inventore accusantium! Reiciendis, expedita, voluptas animi corporis fugit quod facilis nemo porro, optio dolorem repudiandae officiis!'
        }
    ];

    const container = document.getElementById('about-card-container');
    const template = document.getElementById('about-card-template').content;

    aboutCards.forEach(card => {
        const clone = document.importNode(template, true);
        clone.querySelector('.img-container img').src = card.imgSrc;
        clone.querySelector('.img-container img').alt = card.altText;
        clone.querySelector('.tiittle-container h3').textContent = card.title;
        clone.querySelector('.description-container p').textContent = card.description;
        container.appendChild(clone);
    });
}

function GetGalleryCards(){
    const properties = [
        {
            imgSrc: './assets/images/anuncio1.jpg',
            title: 'Casa de Lujo en el Lago',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            number: '12345678',
            bathrooms: 3,
            garage: 2,
            bedrooms: 4
        },
        {
            imgSrc: './assets/images/anuncio2.jpg',
            title: 'Casas terminadas de lujo',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            number: '12345678',
            bathrooms: 3,
            garage: 2,
            bedrooms: 4
        },
        {
            imgSrc: './assets/images/anuncio3.jpg',
            title: 'Casas con pileta',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            number: '12345678',
            bathrooms: 3,
            garage: 2,
            bedrooms: 4
        }
    ];
    
    const container = document.getElementById('gallery-card-container');
    const template = document.getElementById('gallery-card-template').content;
    
    properties.forEach(property => {
        const clone = document.importNode(template, true);
        clone.querySelector('.img-container img').src = property.imgSrc;
        clone.querySelector('.tittle-container h4').textContent = property.title;
        clone.querySelector('.description-container p').textContent = property.description;
        clone.querySelector('.number-container').textContent = property.number;
        clone.querySelectorAll('.amenities-container .icon-container label')[0].textContent = property.bathrooms;
        clone.querySelectorAll('.amenities-container .icon-container label')[1].textContent = property.garage;
        clone.querySelectorAll('.amenities-container .icon-container label')[2].textContent = property.bedrooms;
        container.appendChild(clone);
    });

}

function GetBlogCards(){
    const blogs = [
        {
            imgSrc: './assets/images/blog1.jpg',
            title: 'Terraza en el techo de tu casa',
            date: '27/11/2021',
            author: 'Alejo Falcone',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nam aperiam voluptas reprehenderit libero repudiandae!'
        },
        {
            imgSrc: './assets/images/blog2.jpg',
            title: 'Guia para la decoracion de tu hogar',
            date: '15/12/2021',
            author: 'Guido Falcone',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nam aperiam voluptas reprehenderit libero repudiandae!'
        }
    ];

    const container = document.getElementById('blog-card-container');
    const template = document.getElementById('blog-card-template').content;

    blogs.forEach(blog => {
        const clone = document.importNode(template, true);
        clone.querySelector('.img-container img').src = blog.imgSrc;
        clone.querySelector('.info-container h4').textContent = blog.title;
        clone.querySelector('.info-container p b:first-of-type').textContent = blog.date;
        clone.querySelector('.info-container p b:last-of-type').textContent = blog.author;
        clone.querySelector('.description').textContent = blog.description;
        container.appendChild(clone);
    });
}