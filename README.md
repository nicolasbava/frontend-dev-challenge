# LANDING PAGE -

This project is a landing page, styled as a mental health landing page oriented to feminist public.


## FIGMA PROTOTYPE

You can see the Figma prototype in this Link
https://www.figma.com/file/Gzm0AecmGDIwDMJ1iC4Dgx/Figma-Test-(Copy)?node-id=5559%3A696


## REACT STRUCTURE

/src -
    /assets -
        /img -                      has global images and images folders and elements imported
            /...
        / js -                      has global variables
            variables.js            has global variables for css colors and some fonts

    /components -                   folder that contains different sections and individual components    
        /accordion                  folder that contains Accordion section and individual components
        /buttons                    folder that contains buttons used along the site
        /contact                    folder that contains Contact section
        /footer                     folder that contains Folder section
        /hero                       folder that contains Hero section
        /input                      folder that contains Input components and elements
        /modals                     folder that contains the differents modals
        /nav-bar                    folder that contains Navegation Bar components
        /shadow                     folder that contains shadows elements
        /testimonials               folder that contains Testimonials Section

    /models-                        has json databases to display in accordion and testimonials

    /toolkit-                       folder that configures React Redux, Global state

        

## LIBRARIES USED

The project is made in React, using styled-components and global css stylesheets. Also I used variables in assets/js/variables to specify the colors and use it along the whole project.



Also I used react-toolkit to create a global state so I could open and close the mobile canva. (I know that choosing redux to do that function it's like using a tank to kill a fly)


### RESPONSIVE

The site was made mobile-first as the client asked.

# PERSONAL COMMENTS

For the moment I don't know how to test, so the project doesn't have test, also I tried to make test but with the redux was complex to do. If I would have more time I could develop test and I am open to test my components or develop Test Driven Development projects.


Also I am beggining to use Typescript, I am interested in developing with Typescript.

The site was made in 2 days. There are thing to improve and finish.

If you found interesting my profile and want to know more about my works, you can visit this links where I did the complete site by myself b2b with a graphic designer who gave me the designs.

www.memoriafilmica.cl

# INIT THE PROJECT

### `yarn install`

To install dependencies in the project

### `yarn start`

To init the project, it will run in https://localhost:3000



