import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import worldMapData from "world-atlas/world/110m.json";

const WorldMap = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = svg.node().clientWidth;
    const height = svg.node().clientHeight;

    // Create new projection and path
    const projection = d3.geoNaturalEarth1();
    const path = d3.geoPath().projection(projection);

    // Extract relevant objects from world map data
    const countries = feature(worldMapData, worldMapData.objects.countries);
    const land = feature(worldMapData, worldMapData.objects.land);

    // Compute bounds and scale/translate values
    const bounds = path.bounds(countries);
    const dx = bounds[1][0] - bounds[0][0];
    const dy = bounds[1][1] - bounds[0][1];
    const x = (bounds[0][0] + bounds[1][0]) / 2;
    const y = (bounds[0][1] + bounds[1][1]) / 2;
    const scale = 0.9 / Math.max(dx / width, dy / height);
    const translate = [width / 2 - scale * x, height / 2 - scale * y];


     // 서울의 좌표값 (위도: 37.5665, 경도: 126.9780)
     const seoul = [126.9780, 37.5665]; // 경도, 위도 순서로 입력
     const seoulCoords = projection(seoul);
     console.log("seoulCoords",seoulCoords[0])

     svg
     .append("circle")
     .attr("cx", seoulCoords[0])
     .attr("cy", seoulCoords[1])
     .attr("r", 10)
     .attr("fill", "red");
    // Add countries and land to SVG
    svg
      .append("g")
      .selectAll("path")
      .data(countries.features)
      .join("path")
      .attr("d", path)
      .attr("fill", "#ccc")
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5)
      .attr("transform", `translate(${translate})scale(${scale})`);

    svg
      .append("path")
      .datum(land)
      .attr("d", path)
      .attr("fill", "#eee")
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5)
      .attr("transform", `translate(${translate})scale(${scale})`);

    // Add zoom behavior to SVG
    svg.call(d3.zoom().on("zoom", (event) => {
      svg.selectAll("path").attr("transform", event.transform);
    }));

    console.log(bounds, dx, dy, x, y, scale, translate);
  }, []);

  return <svg style={{ width: "100%", height: "100%" }} ref={svgRef} />;
};

export default WorldMap;
