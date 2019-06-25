

export interface IItem {
    title?: string;
    content: string;
}

export interface IService {
    slug: string;
    title: string;
    description: string;
    lead: string;
    // Service Images
    thumbnail: string;
    images: {
        src: string;
        shoutout?: string;
    }[];

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
        thumbnail: './../../assets/images/services/dayof/dayof-justicephoto.jpg',
        shoutoutLink: 'https://instagram.com/justicephoto',
        shoutout: '@justicephoto',
        images: [
            {
                src: './../../assets/images/services/dayof/dayof-justicephoto.jpg',
                shoutout: '@justicephoto',
            },
            {
                src: './../../assets/images/services/dayof/dayof-1.jpg'
            },
            {
                src: './../../assets/images/services/dayof/dayof-2.jpg'
            },
            {
                src: './../../assets/images/services/dayof/dayof-3.jpg'
            },
            {
                src: './../../assets/images/services/dayof/dayof-4.jpg'
            }            
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
    SUITES: {
        slug: 'suites',
        title: 'Suites',
        description: 'Work together with me to design your dream invitations for your event.',
        lead: 'Browse our past projects!',
        thumbnail: './../../assets/images/services/suites/suite-stormy-peterson.jpg',
        shoutoutLink: 'https://instagram.com/stormypetersonphotography',
        shoutout: '@stormypetersonphotography',
        images: [
            {
                src: './../../assets/images/services/suites/suite-stormy-peterson.jpg',
                shoutout: '@stormypetersonphotography',
            },
            {
                src: './../../assets/images/services/suites/suite-1.jpg'
            },
            {
                src: './../../assets/images/services/suites/suite-1.jpg'
            },
            {
                src: './../../assets/images/services/suites/suite-1.jpg'
            },
            {
                src: './../../assets/images/services/suites/suite-1.jpg'
            }
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
        thumbnail: './../../assets/images/services/envelopes/envelope-erinkelli.jpg',
        shoutoutLink: 'https://instagram.com/erinkelliphotography',
        shoutout: '@erinkelliphotography',
        images: [
            {
                src: './../../assets/images/services/envelopes/envelope-erinkelli.jpg',
                shoutout: '@erinkelliphotography'
            },
            {
                src: './../../assets/images/services/envelopes/envelope-1.jpg'
            },
            {
                src: './../../assets/images/services/envelopes/envelope-2.jpg'
            },
            {
                src: './../../assets/images/services/envelopes/envelope-3.jpg'
            },
            {
                src: './../../assets/images/services/envelopes/envelope-4.jpg'
            },
            {
                src: './../../assets/images/services/envelopes/envelope-5.jpg'
            }
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
    SERVICES.SUITES,
    SERVICES.DAY_OF_DESIGN,
    SERVICES.ENVELOPES
];
