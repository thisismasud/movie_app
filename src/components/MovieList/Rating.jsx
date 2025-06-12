import Star from "../../assets/star.svg";
export default function Rating({ value }) {
  const stars = Array(value).fill(Star);

  return (
    <>
      {stars.map((star, index) => {
        return <img src={Star} key={index} width="14" height="14" alt="star" />;
      })}
    </>
  );
}
