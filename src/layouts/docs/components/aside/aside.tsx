import Link from 'next/link';
import { useRouter } from 'next/router';

import { SIDEBAR } from '@/config/sidebar';

function Aside() {
  let router = useRouter();

  return (
    <aside
      className="
        hidden

        z-20

        fixed
        inset-0

        w-full
        h-full

        self-end

        lg:sticky
        lg:block
        lg:w-64
        2xl:w-64
        lg:h-auto

        lg:overflow-y-visible
      "
    >
      <nav
        className="
          h-full
          max-w-2xl

          overflow-y-auto

          pr-4
          pl-4
          py-12

          bg-white

          lg:sticky
          lg:top-20
          lg:h-screen
          lg:block
          lg:pl-0
          lg:pr-6

          dark:bg-gray-900
        "
        aria-label="Categories"
      >
        <ul className="space-y-6">
          {SIDEBAR.map((item) => (
            <li key={item.title}>
              <h5
                className="
                  block

                  ml-3
                  mb-2
            
                  font-medium
                  tracking-wide

                  text-sm
                  text-slate-900

                  dark:text-white
                "
              >
                {item.title}
              </h5>
              {Boolean(item.children?.length) && (
                <ul className="space-y-1">
                  {item.children?.map(({ title, slug }) => (
                    <li key={slug}>
                      <Link href={slug} passHref>
                        <a
                          href={slug}
                          // eslint don't detect ternary value?
                          // eslint-disable-next-line jsx-a11y/aria-proptypes
                          aria-current={`${
                            router.pathname === `/${slug}` ? 'page' : 'false'
                          }`}
                          className="
                            flex
                            align-middle
                            justify-between

                            py-2
                            px-3

                            text-sm
                            text-slate-500

                            dark:text-slate-400

                            rounded

                            hover:bg-gray-50
                            hover:text-gray-600

                            dark:hover:bg-blue-400/10

                            aria-current-page:bg-blue-50
                            aria-current-page:border-l-2
                            aria-current-page:text-blue-500
                            aria-current-page:border-l-blue-500
                          "
                        >
                          {title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;