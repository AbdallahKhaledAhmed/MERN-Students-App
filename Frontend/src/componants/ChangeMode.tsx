import { useEffect, useState } from "react";
import { ChangeModeProps } from "../main";

export default function ChangeMode({ root }: ChangeModeProps) {
  const storedValue = window.localStorage.getItem("darktheme");
  const [darkmode, setDarkMode] = useState(
    storedValue ? JSON.parse(storedValue) : false
  );
  useEffect(() => {
    if (darkmode === true) {
      root.current?.classList.add("dark");
    } else if (darkmode === false) {
      root.current?.classList.remove("dark");
    }
    window.localStorage.setItem("darktheme", JSON.stringify(darkmode));
  }, [darkmode, root]);

  return (
    <button
      onClick={() => {
        setDarkMode(!darkmode);
      }}
      className="absolute top-2 right-2 hover:bg-gray-400/50 rounded-full cursor-pointer p-1.5"
    >
      {darkmode ? (
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACkklEQVRIS9WWz0tUURTHfVSSBOnOdDUrt6kgYpJpGqPiT2ots6q/oZW66k8Id0HQsqTUwSIs+wURmCC6VBe5ciGImGmNn+9wZ7q+ee/d6xCJBw7v3XvO93zP/XluUHFGEpwRb0VZxLlcLkXCGZP0kyAINk47gHKJOyFaMGRdEL87/8RM5y1GUc1oXoZHg805YnyGwO2AX4yajcipBnQb5xn0IjoA+LUNxl5Du9H0fce+E7Knab9CD9F+7O/D5HHE3Thm0UvoPpoG/MFnHUmqC79ZtMoQ94F960UsJwIM8nlhiHsBfyqAsSnhBvQCuoYtZ9na+Z9HL6PD2JREiSTuagjugfgB+ItJpo3vQ1RLccVE2+P7Bn2E31fjd4NvLW0lHinex4kkHhDhMRqH+YMtA9nTODK734sY0lZAGrXL/wif65CvushdgfJ4iD/z0TT7yDTEoy7HIrG5BlMWIH9M6K+jb8sVyLL/4v8q2IPQsZPLRuF6tYknMIxbAfJXIWBtlOKO9kygEexy6KIRdJJ+8fxdM5ziiFvwy+/WU0gLBN98iTXNUVNdTf+Jm8mRgHZ3DcS7XlOdFIwAunl0dn0kC2m/y9F3Vzeb6dZNlSQ6Tk0Qr/wTYgVh1Pf5TCUE/I1tDNJnLlLZXVfmXXy2rCvzJm3tfBURW1Q6J/BbMknqJFyj/TwuiVhiRjgAaBpVdVKF+VgIgk0Fot6017FtWrYO/udQFYkhbPovkbiy2IOnqkol+hNVWYws6OGIJCXiQnXSZXInChtHrJqqh4Dq8SBABSqKx0OgF2dNvx4CKqkltTxpqpW5nj56SZwQz6fPCKBte4nsIF7HqRziqHU918Qpss+YEfy/B71rGn3sZa2xT2CXzzGVOREuTalfVwAAAABJRU5ErkJggg==" />
      ) : (
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAB+klEQVRIS8WWTShFQRiG3ZSyQBZKNiJlY0dYUP6SQorYWFggCysbKVGiJGsbJDaUlBRKyN9CElYSKVEWShGhlJ/n070a55577pw7Tnfq6Z755vve95wzc+eMLyZKzRcl3xg3xpKbC59wbHrDOsZxmHRAF2RAHhx5bVyAwQxk+42e+U00NZV6pyeuZ3wO5IkD7ZCLfC+NixDfhliLyTr9Sq+M0xE+gWQbgzViVV4ZLyNcHUL8lHiOF8YyfwcOwh+MJcGLqbl1cS0g2BBGtJFxyTNqqrGs3keID6O4w3iJkSvFqnE5/Q1NwTLytjRzbdNU43YyxjXFzsiTHexVMz8oTTXuZ3TAhdAmubXw5qLmN1U17iY64lJE9mz5X9+7rPszxy0UT7sVIP8GemEW5Mul1dQnLqRiX6vKPumc8ArswiVcKWsgk+tmmIJbKVeN5foBZIPwosl0pASErRvIJAOtXriiOQqyjn6a1TiL2IVN3PReZO7ldV+HMpb4BLSZOlnqh+j3qTG7g4BsmfL5K/4n8z10KuA9nLGMJ8ASlBqay7ZaA0E7nNPRR04fg9ATwZx/UTPsf722/22dU6Yc+MZAjrY6Tb7nneB4EtUxFjPJk1fWBHX+qVBv4onOIszDqs7d6Rpb10UqgTR/UHaiO5DXq90iMdYWd0qMmvE3q3dJH97q+c4AAAAASUVORK5CYII=" />
      )}
    </button>
  );
}
