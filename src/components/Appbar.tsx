export default function AppBar() {
  return (
    <MuiAppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color={"secondary"} variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Box>
        <Box>
          <AccountMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
