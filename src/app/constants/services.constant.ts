
export interface IItem {
    title?: string;
    content: string;
}

export interface IService {
    slug: string;
    title: string;
    description: string;
    lead: string;

    // CSS Reference for BannerImage Positioning
    // banner-<id>
    banner: string;

    // Service Images
    thumbnail: string;
    bannerImage: string;
    images?: string[];

    // Service Item Breakdown
    itemHeader: string;
    items?: IItem[];
}

export const SERVICES = {
    DAY_OF_DESIGN: {
        slug: 'day-of-design',
        title: 'day of design',
        description: 'The day of your wedding will be your most memorable day yet, the details should be too.',
        lead: 'Go ahead, take a peek!',
        thumbnail: './../../assets/images/banners/banner-2.jpg',
        bannerImage: './../../assets/images/banners/banner-5.jpg',
        banner: 'banner-5',
        images: [
            './../../assets/images/services/dayof/dayof-1.jpg',
            './../../assets/images/services/dayof/dayof-2.jpg',
            './../../assets/images/services/dayof/dayof-3.jpg',
            './../../assets/images/services/dayof/dayof-4.jpg'
        ],
        itemHeader: 'Just a handful of day of services',
        items: [
            {
                title: 'Escort cards',
                content: 'lead your guests to an assigned table'
            },
            {
                title: 'Place cards',
                content: 'add a personal touch to each place setting'
            },
            {
                title: 'Seating chart',
                content: 'Show off your wedding style with a large sign to guide your guests to their table'
            },
            {
                title: 'Table numbers/names',
                content: 'Add an elegant sign to your centerpieces to help your guests navigate the room'
            },
            {
                title: 'Custom',
                content: 'Run your ideas by us, and we can work together to make your idea come to life!'
            }
        ]
    },
    SIGNAGE: {
        slug: 'signage',
        title: 'Signage',
        description: 'Welcome your guests with a one of a kind hand-made wooden sign, tailored to your style.',
        lead: 'Browse our past projects!',
        thumbnail: './../../assets/images/banners/banner-4.jpg',
        bannerImage: './../../assets/images/banners/banner-10.jpg',
        banner: 'banner-10',
        images: [
            './../../assets/images/services/signage/signage-1.jpg',
            './../../assets/images/services/signage/signage-2.jpg',
            './../../assets/images/services/signage/signage-3.jpg',
            './../../assets/images/services/signage/signage-4.jpg'
        ],
        itemHeader: '',

        items: [
            {
                title: 'Welcome sign',
                content: 'Whether simple, or detailed… we can make a sign perfect for your big day!'
            },
            {
                title: 'Cards & gifts',
                content: 'A beautiful handmade sign for your gift table!'
            },
            {
                title: 'Wedding hashtag',
                content: 'Let your guests know how to tag their photos to share!'
            },
            {
                title: 'Bar Menu',
                content: 'Show off your choice in libations!'
            },
            {
                title: 'Custom',
                content: 'Have an idea? Let’s talk!'
            }
        ]
    },
    ENVELOPES: {
        slug: 'envelopes',
        title: 'Envelopes',
        description: 'Invitations aren\'t the only thing that should claim beauty.',
        lead: 'Take a look at some examples!',
        thumbnail: './../../assets/images/banners/banner-3.jpg',
        bannerImage: './../../assets/images/banners/banner-11.jpg',
        banner: 'banner-11',
        images: [
            './../../assets/images/services/envelopes/envelope-1.jpg',
            './../../assets/images/services/envelopes/envelope-2.jpg',
            './../../assets/images/services/envelopes/envelope-3.jpg',
            './../../assets/images/services/envelopes/envelope-4.jpg',
            './../../assets/images/services/envelopes/envelope-5.jpg'
        ],
        itemHeader: 'Whoever said “don’t judge a book by its cover,” never met an envelope!',
        items: [
            {
                content: 'We offer a few different styles that are sure to make your envelopes pop! Whether you’re looking for casual or formal, we can work together to create the perfect envelope to compliment your invitations.'
            }
        ]
    }
};

export default [
    SERVICES.DAY_OF_DESIGN,
    SERVICES.SIGNAGE,
    SERVICES.ENVELOPES
];
