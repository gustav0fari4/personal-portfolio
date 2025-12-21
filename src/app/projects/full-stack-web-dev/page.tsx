import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Full Stack Web Dev – Inventory, Rental & Ticketing | Gustavo Faria",
  description:
    "Collection of full-stack Next.js + MySQL applications featuring CRUD workflows, API routes, authentication, and role-based access (tenant/landlord/admin).",
};

export default function FullStackWebDevPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <Navbar />

      <Container>
        <div className="py-10">
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Full Stack Web Dev – Inventory, Rental & Ticketing
          </h1>

          <p className="mt-3 max-w-3xl text-white/80">
            Collection of full-stack web applications built during an academic Web
            Development module. The suite demonstrates MySQL-backed CRUD systems,
            API routes, and role-based dashboards across three domains.
          </p>

          <div className="mt-8 space-y-8 text-white/80">
            <section>
              <h2 className="text-xl font-semibold text-white">Screenshots</h2>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <a
                    href="/projects/screenshots/suite-menu.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block cursor-zoom-in"
                    title="Open full size"
                  >
                    <div className="relative h-80 w-full">
                      <Image
                        src="/projects/screenshots/suite-menu.png"
                        alt="ASuite menu (assignments)"
                        fill
                        className="object-contain bg-black"
                      />
                    </div>
                  </a>
                  <p className="px-5 pb-4 text-sm text-white/60">
                    Suite entry point
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <a
                    href="/projects/screenshots/cinema-booking.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block cursor-zoom-in"
                    title="Open full size"
                  >
                    <div className="relative h-80 w-full">
                      <Image
                        src="/projects/screenshots/cinema-booking.png"
                        alt="Cinema ticket booking screen"
                        fill
                        className="object-contain bg-black"
                      />
                    </div>
                  </a>
                  <p className="px-5 pb-4 text-sm text-white/60">
                    Ticketing flow: book a cinema ticket.
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <a
                    href="/projects/screenshots/appliance-form.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block cursor-zoom-in"
                    title="Open full size"
                  >
                    <div className="relative h-80 w-full">
                      <Image
                        src="/projects/screenshots/appliance-form.png"
                        alt="Appliance Tracker form"
                        fill
                        className="object-contain bg-black"
                      />
                    </div>
                  </a>
                  <p className="px-5 pb-4 text-sm text-white/60">
                    Appliance Tracker: create/register appliance (MySQL-backed CRUD).
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <a
                    href="/projects/screenshots/admin-panel.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block cursor-zoom-in"
                    title="Open full size"
                  >
                    <div className="relative h-80 w-full">
                      <Image
                        src="/projects/screenshots/admin-panel.png"
                        alt="Admin panel user management"
                        fill
                        className="object-contain bg-black"
                      />
                    </div>
                  </a>
                  <p className="px-5 pb-4 text-sm text-white/60">
                    Role-based access: admin panel (user management).
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <a
                    href="/projects/screenshots/manage-applications.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block cursor-zoom-in"
                    title="Open full size"
                  >
                    <div className="relative h-80 w-full">
                      <Image
                        src="/projects/screenshots/manage-applications.png"
                        alt="Admin view: manage property rental applications"
                        fill
                        className="object-contain bg-black"
                      />
                    </div>
                  </a>
                  <p className="px-5 pb-4 text-sm text-white/60">
                    Property Letting Platform: admin manages rental applications (approved/rejected).
                  </p>
                </div>

              </div>
            </section>
          </div>

          <div className="mt-8 space-y-8 text-white/80">
            <section>
              <h2 className="text-xl font-semibold text-white">Projects included</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong>Cinema &amp; Inventory Manager:</strong> user registration,
                  ticket listing, and inventory display/manipulation.
                </li>
                <li>
                  <strong>Appliance Tracker:</strong> CRUD for appliances, purchase/warranty
                  tracking, and duplicate serial prevention.
                </li>
                <li>
                  <strong>Property Letting Platform:</strong> tenant/landlord/admin roles;
                  tenants apply, landlords manage listings, admin overview.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Tech stack</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Next.js</li>
                <li>MySQL</li>
                <li>API routes (REST-style endpoints)</li>
                <li>Authentication + role-based access control (RBAC)</li>
                <li>UI patterns for tables, forms, dashboards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">What I learned</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Designing relational schemas to support real CRUD workflows</li>
                <li>Implementing API routes and server-side validation</li>
                <li>Building role-aware UX (tenant/landlord/admin dashboards)</li>
                <li>Improving UI consistency across multiple apps in one repo</li>
              </ul>
            </section>

            <section>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black"
                  href="https://github.com/gustav0fari4/Full-Stack-Web-Dev-Inventory-Rental-Ticketing-"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View on GitHub
                </a>

                <Link
                  className="rounded-xl border border-white/15 px-4 py-2 text-sm"
                  href="/projects"
                >
                  Back to Projects
                </Link>
              </div>
            </section>

            <Link
              href="/"
              className="inline-block rounded-xl border border-white/15 px-4 py-2 text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}