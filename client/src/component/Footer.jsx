import React from 'react'
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function FooterComponent() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                    <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purpule-500 to-pink-500 rounded-lg text-white'>Vishwa's</span>
                        Blog
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title='about'/>
                            <Footer.LinkGroup col>
                                <Footer.Link 
                                    href='https://vishwaprasanth.netlify.app/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    portfolio project
                                </Footer.Link>
                                <Footer.Link 
                                    href='/about'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    vishwa
                                </Footer.Link>
                            </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='follow us'/>
                            <Footer.LinkGroup col>
                                <Footer.Link 
                                    href='https://github.com/vishwaprasanth'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Github
                                </Footer.Link>
                                <Footer.Link 
                                    href='#'
                                >
                                    Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='legal'/>
                            <Footer.LinkGroup col>
                                <Footer.Link 
                                    href='#'
                                >
                                    Private policy
                                </Footer.Link>
                                <Footer.Link 
                                    href='#'
                                >
                                    terms &amp; condition
                                </Footer.Link>
                            </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className=''>
                <Footer.Copyright href='#' by="Vishwa's Blog" year={new Date().getFullYear()}/>
            </div>
        </div>
    </Footer>
  )
}
