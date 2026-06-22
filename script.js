(async () => {
  const svg = new DOMParser().parseFromString(
    await (await fetch("GR_Logo.svg")).text(),
    "image/svg+xml",
  );

  document.documentElement.style.setProperty(
    "--Running_Marginal_Border_Width",
    `calc(
      ${parseFloat(svg.querySelector('circle[stroke="#5bcefa"]').getAttribute("stroke-width"))}
      / ${parseFloat(svg.querySelector("svg").getAttribute("viewBox").trim().split(/\s+/)[2])}
      * var(--Navigation_Logo_Size)
    )`,
  );
})();
