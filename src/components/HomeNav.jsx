import { Flex, IconButton, useColorMode,Box,Text } from "@chakra-ui/react";
import { MoonIcon,SunIcon } from '@chakra-ui/icons';
export default function HomeNav(){
    const { colorMode,toggleColorMode } = useColorMode();
    return(
        <Flex className="w-full" justifyContent={"space-between"}>
            <Text className="CategoryHeading text-2xl font-semibold">All News</Text>
            <Flex className="languageToggle w-max h-max p-1 flex rounded-md">
                <Box className="english px-4 py-2 rounded"><span>English</span></Box>
                <Box className="hindi px-4 py-2 rounded"><span>Hindi</span></Box>
            </Flex>
            <IconButton onClick={toggleColorMode} icon={colorMode === "dark" ? <SunIcon/> : <MoonIcon/>}/>
        </Flex>
    );
}