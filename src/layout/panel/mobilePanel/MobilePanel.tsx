import React from 'react';
import { PanelProps, tabsData, TabsType } from "@/layout/panel/Panel";
import { StyledBox } from "@/ui/Box/styles/StyledBox";
import { Avatar } from "@/layout/avatar/Avatar";
import { StyledMobilePanel } from "@/layout/panel/styled";

export const MobilePanel = (props: PanelProps) => {
    const onClickBarLink = (tab: TabsType) => {
        props.setActiveTab && props.setActiveTab(tab);
        props.setIsOpen && props.setIsOpen(true);
    };

    return (
        <StyledMobilePanel>
            {/*<StyledBox width="100%" justify="space-around">*/}
            {/*    {tabsData.map(({ icon, margin, tab, title, border }, index) => (*/}
            {/*        <MobileBarLink key={index} title={title} onClick={() => onClickBarLink(tab)} checked={tab === activeTab}>*/}
            {/*            <BarLinkIcon>{icon}</BarLinkIcon>*/}
            {/*        </MobileBarLink>*/}
            {/*    ))}*/}
            {/*    <Avatar size="45px" image="https://i.imgur.com/P11sXfz.png" />*/}
            {/*</StyledBox>*/}
        </StyledMobilePanel>
    );
}


