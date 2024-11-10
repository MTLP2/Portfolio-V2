export const metadata = (locale) => (
    {
    title: {
        default: locale === 'fr' ? 
            'Mathéo Lopes - Développeur Web Freelance à Paris | Expert Next.js, React, Node.js' :
            'Mathéo Lopes - Freelance Web Developer in Paris | Next.js, React, Node.js Expert',
    },
    description: locale === 'fr' ? 
        'Mathéo Lopes, développeur web freelance basé à Paris, crée des applications web performantes et des sites d’exception. Polyvalent et expert en Next.js, React et Node.js, Mathéo adapte chaque projet aux besoins du client pour des solutions esthétiques et optimisées, en France et à l’international.' :
        'Mathéo Lopes, freelance web developer based in Paris, creates high-performance web applications and award-worthy websites. Versatile and skilled in Next.js, React, and Node.js, Mathéo customizes each project to client needs, delivering optimized and visually stunning solutions for clients across France and globally.',
    twitter: {
        card: 'summary_large_image',
        title: locale === 'fr' ? 'Mathéo Lopes - Développeur Web Freelance à Paris' : 'Mathéo Lopes - Freelance Web Developer in Paris',
        description: locale === 'fr' ? 
            'Expert en Next.js, React et Node.js. Code de haute qualité pour des performances web optimales.' :
            'Expert in Next.js, React, and Node.js. High-quality, optimized code for top-notch web performance.',
        images: [
            {
                url: 'https://mathlpbucket.s3.eu-west-3.amazonaws.com/img2.jpg',
                alt: 'Mathéo Lopes Logo',
            },
        ],
    },
    openGraph: {
        title: locale === 'fr' ? 
            'Mathéo Lopes - Développeur Web Freelance à Paris | Sites Haute Performance' :
            'Mathéo Lopes - Freelance Web Developer in Paris | High-Performance Sites',
        description: locale === 'fr' ? 
            'Développeur web freelance spécialisé en applications performantes et sites de niveau Awwwards avec Next.js, React et Node.js. Solutions sur mesure et optimisées pour chaque projet.' :
            'Freelance web developer specializing in high-performance applications and Awwwards-level sites with Next.js, React, and Node.js. Tailored, optimized solutions for each project.',
        images: [
            {
                url: 'https://mathlpbucket.s3.eu-west-3.amazonaws.com/img2.jpg',
                alt: 'Mathéo Lopes Logo',
            },
        ],
    },
    additionalMetaTags: [
        {
            name: 'keywords',
            content: locale === 'fr' ? 
                'Mathéo Lopes, développeur web Paris, développeur web freelance, développeur Next.js, développeur React, développeur Node.js, JavaScript, applications web, sites Awwwards, développeur front, intégration web, optimisation SEO, sites sur mesure' :
                'Mathéo Lopes, web developer Paris, freelance web developer, Next.js developer, React developer, Node.js developer, JavaScript, web applications, Awwwards websites, front-end developer, web integration, SEO optimization, custom websites',
        },
        {
            name: 'robots',
            content: 'index, follow',
        },
        {
            name: 'author',
            content: 'Mathéo Lopes',
        },
        {
            name: 'language',
            content: locale === 'fr' ? 'French' : 'English',
        },
    ],
    openGraphLocale: locale === 'fr' ? 'fr_FR' : 'en_US',
  });
  