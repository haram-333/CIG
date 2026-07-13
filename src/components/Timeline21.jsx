"use client";

import { Button } from "@relume_io/relume-ui";
import React, { Fragment } from "react";
import { RxChevronRight } from "react-icons/rx";

export function Timeline21() {
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Journey</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              The arc of your story with us
            </h2>
            <p className="md:text-md">
              From the first spark of interest to the day you walk across the
              stage. This is the path.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Start" variant="secondary">
                Start
              </Button>
              <Button
                title="Path"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Path
              </Button>
            </div>
          </div>
        </div>
        <div className="relative grid auto-cols-fr grid-flow-row grid-cols-1 items-center justify-items-center md:grid-flow-col md:grid-cols-[max-content_1fr] md:justify-items-stretch">
          <div className="relative hidden md:grid md:grid-cols-1 md:items-end md:gap-4">
            <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
              <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
            </div>
          </div>
          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="mb-8 overflow-hidden md:mb-0 md:mr-10">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                  alt="Relume placeholder image 1"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
              </div>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Enquiry</h3>
                <p>
                  You reach out. We listen. We send you everything you need to
                  make an informed choice.
                </p>
              </div>
            </Fragment>
          </div>
          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none md:self-end">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Apply</h3>
                <p>
                  You submit your application and have a conversation with our
                  team. The offer lands in your inbox.
                </p>
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
              </div>
              <div className="col-end-2 row-end-2 mb-8 self-start overflow-hidden md:col-end-auto md:row-end-auto md:mb-0 md:mr-10">
                <img
                  src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1200&auto=format&fit=crop"
                  alt="Relume placeholder image 2"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </Fragment>
          </div>
          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="mb-8 overflow-hidden md:mb-0 md:mr-10">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
                  alt="Relume placeholder image 3"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
              </div>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Enrol</h3>
                <p>
                  You join us for induction. You meet your tutor, your cohort,
                  and the city.
                </p>
              </div>
            </Fragment>
          </div>
          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none md:self-end">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Study</h3>
                <p>
                  You dive into your foundation or honors year. You learn,
                  struggle, grow, and succeed.
                </p>
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
              </div>
              <div className="col-end-2 row-end-2 mb-8 self-start overflow-hidden md:col-end-auto md:row-end-auto md:mb-0 md:mr-10">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                  alt="Relume placeholder image 4"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </Fragment>
          </div>
          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="mb-8 overflow-hidden md:mb-0 md:mr-10">
                <img
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop"
                  alt="Relume placeholder image 5"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full hidden md:block" />
              </div>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Graduate</h3>
                <p>
                  You cross the stage with a University of Wolverhampton degree.
                  You join our alumni network and the 87%.
                </p>
              </div>
            </Fragment>
          </div>
          <div className="absolute right-0 z-0 h-1 w-16 bg-gradient-to-r from-transparent to-white" />
        </div>
      </div>
    </section>
  );
}
