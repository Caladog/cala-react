import React, { useState, useEffect } from 'react';
import ProLayout, { PageContainer, SettingDrawer } from '@ant-design/pro-layout';
import { DashboardOutlined, AreaChartOutlined, BarsOutlined, SettingOutlined, BlockOutlined,TableOutlined } from '@ant-design/icons';
import defaultSettings from '../../config/settings';
import KeepAliveTabs from '@/components/KeepAliveTabs';
import AvatarDropdown from '@/components/AvatarDropdown';
import { Link } from 'umi';
import menuData from '../json/menu';

export default (props) => {
    const [settings, setSetting] = useState(defaultSettings);
    const [pathname, setPathname] = useState(props.location.pathname);

    useEffect(() => {
        setPathname(props.location.pathname);
    }, [props.location.pathname]);

    const iconEnum = {
        dashboard: <DashboardOutlined />,
        areaChart: <AreaChartOutlined />,
        menu: <BarsOutlined />,
        setting: <SettingOutlined />,
        table: <TableOutlined />,
        other: <BlockOutlined />
    };

    const menuDataRender = (menuList) => {
        return menuList.map((item) => {
            const localItem = {
                ...item,
                locale: false,
                icon: iconEnum[item.icon],
                children: item.children ? menuDataRender(item.children) : undefined,
            };
            return localItem;
        });
    };

    return (<>
        <ProLayout
            {...settings}
            location={{ pathname }}
            menu={{
                request: async () => {
                    return menuData;
                },
            }}
            headerRender={() => <><KeepAliveTabs /><AvatarDropdown bgColor={settings.primaryColor} /></>}
            //headerContentRender={() => <KeepAliveTabs />}
            //rightContentRender={() => <AvatarDropdown bgColor={settings.primaryColor} />}
            menuItemRender={(item, dom) => (
                location.pathname === item.path ? dom : <Link to={item.path} onClick={() => { setPathname(item.path) }}>{dom}</Link>
            )}
            menuDataRender={() => menuDataRender(menuData || [])}
        >
            <PageContainer>
                {props.children}
            </PageContainer>

        </ProLayout>
        {/* <SettingDrawer
            settings={settings}
            onSettingChange={(changeSetting) => { setSetting(changeSetting); }}
            hideHintAlert={true}
            disableUrlParams={true}
        /> */}
    </>
    )
}