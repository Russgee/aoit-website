import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminSvgo from 'imagemin-svgo';
import imageminGifsicle from 'imagemin-gifsicle';

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
            imageminSvgo({
                plugins: [{
                    removeViewBox: false
                }]
            }),
            imageminGifsicle()
        ]
    });

    console.log(files);
    console.log('Images optimized');
})();