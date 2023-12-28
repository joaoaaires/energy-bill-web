import {beforeEach, describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Header from './Header';

describe("Header", () => {

    beforeEach(() => {
        render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        );
    });

    test("should show title all the time", () => {
        expect(screen.getAllByText(/Dashboard/i)).toBeDefined()
        expect(screen.getAllByText(/Faturas/i)).toBeDefined()
    })
})