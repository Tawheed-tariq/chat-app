import { extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
    colors: {
        txt: '#E7F3F7',
        primary: '#31C8FE',
        secondary: '#0B6F93',
        container: 'rgba(49, 200, 254, 0.12)',
        boxMedium: 'rgba(11, 111, 147, 0.37)',
        boxSmall: 'rgba(133, 209, 237, 0.33)'
    },
    styles: {
        global: {
          body: {
            bg: '#081A20',
          },
        },
    },
    components: {
        Button: {
          baseStyle: {
            fontWeight: "medium",
            borderRadius: "10px",
          },
        },
        Text: {
            baseStyle: {
                color: "#E7F3F7",
            }
        },
        Icon: {
            baseStyle: {
                color: "#E7F3F7",
                fontSize: '25px'
            }
        }
    },
})