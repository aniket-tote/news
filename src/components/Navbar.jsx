import { BiDownArrowAlt,BiUpArrowAlt } from 'react-icons/bi';
import { Flex, IconButton, useColorMode,Box,Text } from '@chakra-ui/react';

export default function Navbar() {
    return (
        <Box className="navbar w-1/5 h-full">
            <Flex className="logo w-full justify-center space-x-5 items-center p-10">
                <img src="../logo192.png" alt="logo" className="h-16 w-16" />
                <span className="logoname text-4xl text-slate-900">
                    Inshorts Clone
                </span>
            </Flex>
            <div className="navigation flex flex-col">
                <div className="heading w-full flex justify-start px-4 py-2 bg-slate-300 items-center cursor-pointer">
                <span className="heading text-2xl text-slate-900 font-semibold ">Categories</span>
                <BiDownArrowAlt className="text-slate-900 mx-2 w-6 h-6 hidden"/>
                <BiUpArrowAlt className="text-slate-900 mx-2 w-6 h-6 inline"/>
                </div>
                <div className="categories">
                    <div className="category1 text-slate-900 w-full flex justify-start px-4 py-2 border-b-2 border-slate-300 hover:bg-slate-300"><span>All News</span></div>
                    <div className="category2 text-slate-900 w-full flex justify-start px-4 py-2 border-b-2 border-slate-300 hover:bg-slate-300"><span>India</span></div>
                    <div className="category3 text-slate-900 w-full flex justify-start px-4 py-2 border-b-2 border-slate-300 hover:bg-slate-300"><span>Science</span></div>
                    <div className="category4 text-slate-900 w-full flex justify-start px-4 py-2 border-b-2 border-slate-300 hover:bg-slate-300"><span>Technology</span></div>
                    <div className="category5 text-slate-900 w-full flex justify-start px-4 py-2 border-b-2 border-slate-300 hover:bg-slate-300"><span>Start Up</span></div>
                    <div className="category6 text-slate-900 w-full flex justify-start px-4 py-2 border-b-2 border-slate-300 hover:bg-slate-300"><span>Business</span></div>
                    <div className="category7 text-slate-900 w-full flex justify-start px-4 py-2 border-b-2 border-slate-300 hover:bg-slate-300"><span>Sports</span></div>
                    <div className="category8 text-slate-900 w-full flex justify-start px-4 py-2 border-b-2 border-slate-300 hover:bg-slate-300"><span>World</span></div>
                    <div className="category9 text-slate-900 w-full flex justify-start px-4 py-2 border-b-2 border-slate-300 hover:bg-slate-300"><span>Miscellaneous</span></div>
                    <div className="category10 text-slate-900 w-full flex justify-start px-4 py-2 border-b-2 border-slate-300 hover:bg-slate-300"><span>Hatke</span></div>
                    <div className="category11 text-slate-900 w-full flex justify-start px-4 py-2 border-b-2 border-slate-300 hover:bg-slate-300"><span>Automobile</span></div>
                    <div className="category12 text-slate-900 w-full flex justify-start px-4 py-2 border-b-2 border-slate-300 hover:bg-slate-300"><span>Entertainment</span></div>
                </div>
            </div>
        </Box>
    );
}
