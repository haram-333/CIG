"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout395() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Entry</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Routes that recognize your life
          </h1>
          <p className="md:text-md">
            Your experience counts. We offer multiple ways to meet the entry
            requirements.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Experience</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Accreditation of prior experiential learning
                </h2>
                <p>
                  Your professional career and life experience can count towards
                  your entry.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="APEL"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  APEL
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Certified</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Recognition of prior certified learning
                </h2>
                <p>
                  Existing qualifications like HNDs or diplomas can give you
                  advanced standing.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="RPCL"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  RPCL
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Mature</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Special entry for mature learners without standard
                  qualifications
                </h2>
                <p>
                  We assess your readiness through interview and a short written
                  task.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Assess"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Assess
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
