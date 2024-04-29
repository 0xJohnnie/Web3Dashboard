'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  AppShell,
  Center,
  Group,
  ScrollArea,
  Stack,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

import SideBar from '@components/_SideBar';
import TabBar from '@components/_TabBar';
import ColorSchemeToggle from '@components/ColorSchemeToggle';
import SocialMedia from '@components/HyperLink';
import LoadingScreen from '@components/LoadingScreen';

import AppConfig from '@utils/AppConfig';
import {
  _appShellFooterHeight,
  _appShellHeaderHeight,
  _appShellHide,
  _appShellPadding,
  _hideFooter,
  _hideHeader,
  _hideNavBar,
  _hrefHome,
  _logo,
  _logoSize,
  _navBarWidth,
  _showThemeToggle,
} from '@utils/constant';
import { useCalcWidthHeight, useIsMobileScreen } from '@utils/util';

import appShellClass from '@style/Appshell.module.css';

const MainAppShell = ({ children }: { children: React.ReactNode }) => {
  const { colorScheme } = useMantineColorScheme();
  const { width: screenWidth, height: screenHeight } = useViewportSize();

  const isMobileScreen = useIsMobileScreen();
  const { cWidth, cHeight } = useCalcWidthHeight();

  return screenHeight === 0 || screenWidth === 0 ? (
    <LoadingScreen />
  ) : (
    <>
      <AppShell
        padding={_appShellPadding}
        header={{ height: _appShellHeaderHeight, collapsed: _hideHeader }}
        navbar={{
          width: _navBarWidth,
          breakpoint: _appShellHide,
          collapsed: { mobile: true, desktop: _hideNavBar },
        }}
        footer={{
          height: _appShellFooterHeight,
          collapsed: _hideFooter || isMobileScreen,
        }}
      >
        {/* +             START OF HEADER             + */}
        <AppShell.Header className={appShellClass.headerFooterShell}>
          <Group
            w={cWidth}
            className={appShellClass.headerFooterContent}
            wrap="nowrap"
            preventGrowOverflow
          >
            <Link href={_hrefHome} aria-label="logo">
              <Center style={{ gap: 8 }}>
                <Image
                  src={_logo}
                  alt="logo"
                  width={_logoSize}
                  height={_logoSize}
                  style={{
                    filter: colorScheme === 'dark' ? 'invert(1)' : 'invert(0)',
                    borderRadius: 8,
                  }}
                />
                <Title order={2}>{AppConfig.site_name}</Title>
              </Center>
            </Link>
            <Group>{_showThemeToggle && <ColorSchemeToggle />}</Group>
          </Group>
        </AppShell.Header>
        {/* +              END OF HEADER              + */}

        {/* +             START OF NAVBAR             + */}
        <AppShell.Navbar className={appShellClass.default}>
          {/* START : NAVBAR CONTENT */}
          <AppShell.Section component={ScrollArea} grow>
            <SideBar />
          </AppShell.Section>
          {/* END : NAVBAR CONTENT */}

          {/* START : NAVBAR FOOTER */}
          <AppShell.Section>
            <SocialMedia />
          </AppShell.Section>
          {/* END : NAVBAR FOOTER */}
        </AppShell.Navbar>
        {/* +              END OF NAVBAR              + */}

        <AppShell.Main>
          <Center>
            <ScrollArea.Autosize type="never" h={cHeight} w={cWidth}>
              <Stack h={cHeight} className={appShellClass.fullWidth}>
                {children}
              </Stack>
            </ScrollArea.Autosize>
          </Center>
        </AppShell.Main>

        {/* +              START OF FOOTER              + */}
        <AppShell.Footer className={appShellClass.headerFooterShell}>
          <Group
            w={cWidth}
            className={appShellClass.headerFooterContent}
            wrap="nowrap"
            preventGrowOverflow
          >
            <TabBar />
          </Group>
        </AppShell.Footer>
        {/* +              END OF FOOTER              + */}
      </AppShell>
    </>
  );
};

export default MainAppShell;
