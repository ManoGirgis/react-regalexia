import React, { Component } from 'react'
import { Input, Space } from 'antd';

class Search extends Component {
    render() {

        function classNames(...classes) {
            return classes.filter(Boolean).join(' ');
        }

        const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
            console.log(info?.source, value)
            window.location.href = process.env.REACT_APP_HOST_URL + '/search?q=' + value;
        };

        const { Search } = Input;
        return (
            <div className="flex space-x-4">
                <Space.Compact>
                    <Search placeholder="Buscar" className={classNames('text-black-300 hover:bg-white-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium w-full'
                    )} onSearch={onSearch} />
                </Space.Compact>
            </div>
        )
    }
}

export default Search
