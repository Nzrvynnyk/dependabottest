<template>
  <nav flex="~ gap-4" mt-6 justify-center text-xl>
    <RouterLink
      icon-btn
      to="/"
      title="Home"
    >
      🜾
    </RouterLink>

    <button
      icon-btn
      title="Toggle"
      @click="toggleDark()"
    >
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <RouterLink
      icon-btn
      to="/wxrds"
      title="Wxrds"
    >
      <div i-carbon-language />
    </RouterLink>

    <RouterLink
      icon-btn
      to="/about"
      title="About"
    >
      <div i-carbon-dicom-overlay />
    </RouterLink>

    <RouterLink
      icon-btn
      to="/zhones"
      title="Zhones"
    >
      <div i-carbon-events />
    </RouterLink>
  </nav>
</template>
