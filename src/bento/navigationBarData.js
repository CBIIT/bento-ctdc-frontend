export const navBarstyling = {
  global: {
    backgroundColor: '#E7E5E5',
    height: '39px',
    padding: '9px 20px 0px 20px',
    fontColor: '#0E273A',
    activeLabel: '2px solid #39C0F0',
    fontFamily: 'Lato',
  },
  dropDownIcon: {
    displayIcon: true,
    fontSize: '18px',
    margin: '0px 0px 0px 0px',
  },
  dropdownMenu: {
    paper: {
      background: '#309EC4',
      width: '200px',
      padding: '5px 18px 18px 18px',
      marginLeft: '15px',
      position: 'absolute',
      marginTop: '-1px',
      borderRadius: '0',
    },
    link: {
      overflowWrap: 'normal',
      textDecoration: 'none',
      color: 'black',
      fontSize: '14px',
      fontWeight: '600',
      lineSpacing: '1px',
      lineHeight: '18px',
      fontFamily: 'Raleway, sans-serif',
      display: 'block',
      marginTop: '10px',
      '&:hover': {
        cursor: 'pointer',
        color: 'white',
      },
    },
  },
};

export const navBarData = [
  // A maximum of 5 nav bar items are allowed
  // A maximum of 9 dropDownLinks items are allowed
  {
    labelText: 'home',
    type: 'link',
    link: '/home',
  },
  {
    labelText: 'explore',
    type: 'link',
    link: '/explore',
  },
  {
    labelText: 'trials',
    type: 'link',
    link: '/trials',
  },
  {
    labelText: 'data',
    type: 'dropdown',
    dropDownLinks: [
      {
        labelText: 'Analyze Data',
        link: '/crdc',
      },
      {
        labelText: 'CTDC Data Model',
        link: '/ctdc-data-model',
      },
      {
        labelText: 'CTDC Data Dictionary',
        link: '/data-dictionary',
      },
      {
        labelText: 'Data Use Policy',
        link: '/data-use',
      },
      {
        labelText: 'Data Submission',
        link: '/submit',
      },
    ],
  },
  {
    labelText: 'resources',
    type: 'dropdown',
    dropDownLinks: [
      {
        labelText: 'GraphQL',
        link: '/graphql',
      },
      {
        labelText: 'Developers',
        link: '/developers',
      },
    ],
  },
  {
    labelText: 'about',
    type: 'dropdown',
    dropDownLinks: [
      {
        labelText: 'Purpose',
        link: '/purpose',
      },
      {
        labelText: 'Contact Us',
        link: '/support',
      },
    ],
  },
  {
    labelText: 'Request Access',
    type: 'link',
    link: '/request-access',
  },
];

export const externalLinks = {
  resources: [
    {
      title: 'GitHub',
      link: 'https://github.com/CBIIT/bento-ctdc-frontend',
    },
  ],
};

export const navBarCartData = {
  cartLabel: 'MY Files',
  cartLink: '/fileCentricCart',
  cartIcon: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/ctdc_Assets/ctdc/images/navBar/Icon-MyCases.svg',
  cartIconAlt: 'cart_logo',
};
