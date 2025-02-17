"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FixturesList from "./fixture-list";
import { AppDispatch, RootState } from "@/store/store";
import { fetchFixtures } from "@/store/fixtures-slice";

export function Fixtures() {
  const dispatch = useDispatch<AppDispatch>();
  const { fixtures, status, error } = useSelector(
    (state: RootState) => state.fixtures
  );

  useEffect(() => {
    if (status === "") {
      dispatch(fetchFixtures());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div aria-live="polite">Loading...</div>;
  }

  if (status === "error") {
    return <div aria-live="assertive">Error: {error}</div>;
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-8">Fixtures</h1>
      <FixturesList fixtures={fixtures} />
    </>
  );
}
