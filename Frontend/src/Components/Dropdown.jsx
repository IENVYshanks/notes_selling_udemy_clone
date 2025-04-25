import React, { useState } from 'react';
import list from '../list.json';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { keys } from '@mantine/core';
export const Dropdowns = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };


  const items = [
    {
      key: '1',
      label: 'Development',
      children: [
        {
          key: '1-1',
          label: 'Web Development',
          children:[
            {            
              key: '1-1-1',
              label: 'Popular titles',
              type: 'group',
              children:[
                {
                  key: '1-1-1-1',
                  label: 'Javascript',

                },
                {
                  key: '1-1-1-2',
                  label: 'React JS',

                },{
                  key: '1-1-1-3',
                  label: 'Angular',

                },{
                  key: '1-1-1-4',
                  label: 'Next.js',

                },
                ,{
                  key: '1-1-1-5',
                  label: 'CSS',
                },{
                  key: '1-1-1-6',
                  label: 'HTML',
                },
              ]
            }  
                  ]
        },
        {
          key: '1-2',
          label: 'Data Science',
          children:[
            {            
              key: '1-2-1',
              label: 'Popular titles',
              type: 'group',
              children:[
                {
                  key: '1-2-1-1',
                  label: 'Python',

                },
                {
                  key: '1-2-1-2',
                  label: 'Machine Learning',

                },{
                  key: '1-2-1-3',
                  label: 'Deep Learning',

                },{
                  key: '1-2-1-4',
                  label: 'Artificial Intelligence(AI)',

                },
                ,{
                  key: '1-2-1-5',
                  label: 'Data Analysis',
                },{
                  key: '1-2-1-6',
                  label: 'LangChain',
                },
              ]
            }  
                  ]
        },
        {
          key: '1-3',
          label: 'Mobile Development',
          children:[
            {            
              key: '1-3-1',
              label: 'Popular titles',
              type: 'group',
              children:[
                {
                  key: '1-3-1-1',
                  label: 'Google Flutter',

                },
                {
                  key: '1-3-1-2',
                  label: 'Android Development',

                },{
                  key: '1-3-1-3',
                  label: 'ios Development',

                },{
                  key: '1-3-1-4',
                  label: 'React Native',

                },
                ,{
                  key: '1-3-1-5',
                  label: 'Dart',
                },{
                  key: '1-3-1-6',
                  label: 'Swift',
                },
              ]
            }  
                  ]
        },  {
          key: '1-4',
          label: 'Programming languages',
          children:[
            {            
              key: '1-4-1',
              label: 'Popular titles',
              type: 'group',
              children:[
                {
                  key: '1-4-1-1',
                  label: 'Python',

                },
                {
                  key: '1-4-1-2',
                  label: 'C#',

                },{
                  key: '1-4-1-3',
                  label: 'React js',

                },{
                  key: '1-4-1-4',
                  label: 'C++',

                },
                ,{
                  key: '1-4-1-5',
                  label: 'Go',
                },{
                  key: '1-4-1-6',
                  label: 'JavaScript',
                },
              ]
            }  
                  ]
        },  {
          key: '1-5',
          label: 'Game Development',
          children:[
            {            
              key: '1-5-1',
              label: 'Popular titles',
              type: 'group',
              children:[
                {
                  key: '1-5-1-1',
                  label: 'Unity',

                },
                {
                  key: '1-5-1-2',
                  label: 'C#',

                },{
                  key: '1-5-1-3',
                  label: 'C++',

                },{
                  key: '1-5-1-4',
                  label: 'Godot',

                },
                ,{
                  key: '1-5-1-5',
                  label: 'CSS',
                },{
                  key: '1-5-1-6',
                  label: 'HTML',
                },
              ]
            }  
                  ]
        },  {
          key: '1-6',
          label: 'Database Design and Development',
        },  {
          key: '1-7',
          label: 'Software Testing',
        },  {
          key: '1-8',
          label: 'Software Engineering',
        },
      ],
    },
    {
      key: '2',
      label: 'Business',
      children: [
        {
          key: '2-1',
          label: 'Entrepreneurship',
        },
        {
          key: '2-2',
          label: 'Management',
        },
        {
          key: '2-3',
          label: 'Communication',
        },
        {
          key: '2-4',
          label: 'Sales',
        },
        {
          key: '2-5',
          label: 'Business Strategy',
        }, {
          key: '2-6',
          label: 'Project Management',
        }, {
          key: '2-7',
          label: 'Business Law',
        },
        {
          key: '2-8',
          label: 'Industry',
        },
      ],
    },
    {
      key: '3',
      label: 'Finance & Accounting',
      // children: [
      //   {
      //     key: '3-1',
      //     label: '5d menu item',
      //   },
      //   {
      //     key: '3-2',
      //     label: '6th menu item',
      //   },
      // ],
  
    },
    {
      key: '4',
      label: 'IT & Software',
    },
    {
      key: '5',
      label: 'Office Productivity'
    },
    {
      key: '6',
      label: 'Personal Development'
    },
    {
      key: '7',
      label: 'Design'
    },
    {
      key: '8',
      label: 'Marketing'
    },{
      key: '9',
      label: 'Health & Fitness'
    },{
      key: '10',
      label: 'Music'
    }
  ];
 
  return (
    <>
      {/* <button className='relative' onMouseEnter={handleMouseEnter} >
        <div className='bg-white-400 p-4 flex flex-row text-md'>
          <div className='hover:text-[#A435F0]'>
            Categories 
          </div>
        </div>
        {isOpen && (
          <div className='bg-white pl-0 absolute top-full left-0 mt-[15px] ml-[0px] flex flex-col p-2 w-[300px] z-[5]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
            {list.map((item, i) => (
              <div key={i}  >
                <h3 >{item.course}</h3>
              </div>
            ))}
          </div>
        )}
      </button> */}
      <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Categories
        </Space>
      </a>
    </Dropdown>
    </>
  );
};