const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminSvgo = require('imagemin-svgo');
const imageminGifsicle = require('imagemin-gifsicle');

(async () => {
    const files = await imagemin(['static/**/*.{jpg,png,svg,gif}'], {
        destination: 'optimized_images',
        plugins: [
            imageminPngquant({
                quality: [0.6, 0.8]
            }),
            imageminMozjpeg({
                quality: 60,
                progressive: true
            }),
            imageminGifsicle()
        ]
    });

    console.log(files);
    console.log('Images optimized');
})();